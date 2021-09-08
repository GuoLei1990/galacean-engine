import { Vector3 } from "@oasis-engine/math";
import { Collider } from "./Collider";

/**
 * Plane-shaped collider.
 */
export class PlaneCollider extends Collider {
  /** The normal of this PlaneCollider. */
  normal: Vector3;
}
