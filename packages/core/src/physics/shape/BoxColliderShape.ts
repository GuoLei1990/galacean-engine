import { Vector3 } from "@oasis-engine/math";
import { PhysicsManager } from "../PhysicsManager";
import { ColliderShape } from "./ColliderShape";

/**
 * Box-shaped collider shape.
 */
export class BoxColliderShape extends ColliderShape {
  /** The size of this BoxColliderShape. */
  size: Vector3;

  constructor(size: Vector3) {
    super();
    this._nativeShape = PhysicsManager._nativePhysics.createBoxColliderShape(size);
  }
}
