import { Vector3 } from "@oasis-engine/math";
// import { IPhysicsManagerStatic } from "@oasis-engine/design";
import { Collider, PhysicsManager } from ".";
import { Entity } from "../Entity";

/**
 * A dynamic rigid body collider component.
 */
export class DynamicCollider extends Collider {
  /** The linear velocity vector of the RigidBody measured in world unit per second. */
  linearVelocity: number;
  /** The angular velocity vector of the RigidBody measured in radians per second. */
  angularVelocity: number;
  /** The linear damping of the RigidBody. */
  linearDamping: number;
  /** The angular damping of the RigidBody. */
  angularDamping: number;
  /** The mass of the RigidBody. */
  mass: number;
  /** Controls whether physics affects the RigidBody. */
  isKinematic: boolean;

  constructor(entity: Entity) {
    super(entity);
    this._nativeStaticCollider = PhysicsManager._nativePhysics.createDynamicCollider();
  }

  /** apply a force to the DynamicCollider. */
  applyForce(force: Vector3): void {}

  /** apply a torque to the DynamicCollider. */
  applyTorque(torque: Vector3): void {}
}
