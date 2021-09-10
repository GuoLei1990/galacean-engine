import { Vector3 } from "@oasis-engine/math";
import { ColliderShape } from "./ColliderShape";

/**
 * Plane-shaped collider shape.
 */
export class PlaneColliderShape extends ColliderShape {
  /** The normal of this PlaneColliderShape. */
  normal: Vector3;
  /** The distance of this PlaneColliderShape. */
  distance: number;
}
