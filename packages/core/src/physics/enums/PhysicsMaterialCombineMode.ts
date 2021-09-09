/**
 * Describes how physics materials of the colliders are combined.
 */
export enum PhysicsMaterialCombineMode {
  /** Averages the friction/bounce of the two colliding materials. */
  Average,
  /** Uses the smaller friction/bounce of the two colliding materials. */
  Minimum,
  /** Uses the larger friction/bounce of the two colliding materials. */
  Maximum,
  /** Multiplies the friction/bounce of the two colliding materials. */
  Multiply
}
