import { Vector3 } from "@oasis-engine/math";
import { ColliderShape } from "./ColliderShape";

/**
 * Plane-shaped collider shape.
 */
export class PlaneColliderShape extends ColliderShape {
  /** The rotation of this PlaneColliderShape. */
  rotation: Vector3;
}
