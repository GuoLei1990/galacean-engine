/**
 * Audio Manager for managing global audio context and settings.
 */
export class AudioManager {
  /** @internal */
  static _playingCount = 0;

  private static _context: AudioContext;
  private static _gainNode: GainNode;
  private static _resumePromise: Promise<void> = null;
  private static _needsUserGestureResume = false;

  /**
   * Suspend the audio context.
   * @returns A promise that resolves when the audio context is suspended
   */
  static suspend(): Promise<void> {
    return AudioManager.getContext().suspend();
  }

  /**
   * Resume the audio context.
   * @remarks On iOS Safari, calling this within a user gesture (e.g., click/touch event handler) can pre-unlock audio and reduce playback delay.
   * @returns A promise that resolves when the audio context is resumed
   */
  static resume(): Promise<void> {
    return (AudioManager._resumePromise ??= AudioManager.getContext()
      .resume()
      .then(() => {
        AudioManager._needsUserGestureResume = false;
      })
      .finally(() => {
        AudioManager._resumePromise = null;
      }));
  }

  /**
   * @internal
   */
  static getContext(): AudioContext {
    let context = AudioManager._context;
    if (!context) {
      AudioManager._context = context = new window.AudioContext();
      document.addEventListener("visibilitychange", AudioManager._onVisibilityChange);
      // iOS Safari requires user gesture to resume AudioContext
      document.addEventListener("touchstart", AudioManager._resumeAfterInterruption, { passive: true });
      document.addEventListener("touchend", AudioManager._resumeAfterInterruption, { passive: true });
      document.addEventListener("click", AudioManager._resumeAfterInterruption);
    }
    return context;
  }

  /**
   * @internal
   */
  static getGainNode(): GainNode {
    let gainNode = AudioManager._gainNode;
    if (!gainNode) {
      const context = AudioManager.getContext();
      AudioManager._gainNode = gainNode = context.createGain();
      gainNode.connect(context.destination);
    }
    return gainNode;
  }

  /**
   * @internal
   */
  static isAudioContextRunning(): boolean {
    return AudioManager.getContext().state === "running";
  }

  // Delay between the recovery suspend() and resume(). Empirical value (matches Phaser's
  // WebAudioSoundManager); there is no spec/vendor-recommended number — it is the most stable
  // value in on-device testing. A Promise-chained suspend().then(resume) is cleaner in theory but
  // occasionally fails on this race, while this fixed delay has not.
  private static readonly _zombieResumeDelay = 100;

  private static _onVisibilityChange(): void {
    if (!document.hidden && AudioManager._playingCount > 0 && !AudioManager.isAudioContextRunning()) {
      // After backgrounding, iOS Safari (and WKWebView) can leave the AudioContext in a "zombie" state:
      // a bare resume() reports state "running" but the rendering pipeline never restarts (no sound,
      // currentTime frozen). suspend() first clears that state so the following resume() takes the full
      // restart path instead of being short-circuited; the resume runs automatically without waiting for
      // a user gesture. Reproducible on plain iOS Safari, not only WKWebView.
      // Related: https://bugs.webkit.org/show_bug.cgi?id=263627
      const context = AudioManager.getContext();
      context.suspend();
      // Fallback: if the automatic resume below fails (iOS may reject it), a later user gesture retries.
      AudioManager._needsUserGestureResume = true;
      setTimeout(() => {
        context
          .resume()
          .then(() => {
            AudioManager._needsUserGestureResume = false;
          })
          .catch(() => {});
      }, AudioManager._zombieResumeDelay);
    }
  }

  private static _resumeAfterInterruption(): void {
    if (AudioManager._needsUserGestureResume) {
      AudioManager.resume().catch((e) => {
        console.warn("Failed to resume AudioContext:", e);
      });
    }
  }
}
