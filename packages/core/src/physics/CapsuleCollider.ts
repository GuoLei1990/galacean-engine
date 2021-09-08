import { Collider } from "./Collider";

/**
 *  Capsule-shaped collider.
 */
export class CapsuleCollider extends Collider {
  /** The radius of this CapsuleCollider. */
  radius: number;
  /** The height of this CapsuleCollider. */
  height: number;
}
