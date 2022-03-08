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
  /** The center of mass relative to the transform's origin. */
  centerOfMass: number;
  /** The diagonal inertia tensor of mass relative to the center of mass. */
  inertiaTensor: Vector3;
  /** The maximum angular velocity of the collider measured in radians per second. (Default 7) range { 0, infinity }. */
  maxAngularVelocity: number;
  /** Maximum velocity of a collider when moving out of penetrating state. */
  maxDepenetrationVelocity: number;
  /** The mass of the RigidBody. */
  mass: number;
  /** The mass-normalized energy threshold, below which objects start going to sleep. */
  sleepThreshold: number;
  /** The solverIterations determines how accurately collider joints and collision contacts are resolved. */
  solverIterations: number;
  /** Controls whether physics will change the rotation of the object. */
  freezeRotation: boolean;
  /** The particular rigid dynamic lock flag. */
  constraints: number;
  /** The colliders' collision detection mode. */
  collisionDetectionMode: number;
  /** Controls whether physics affects the RigidBody. */
  isKinematic: boolean;

  constructor(entity: Entity) {
    super(entity);
  }

  /** apply a force to the DynamicCollider. */
  applyForce(force: Vector3): void {}

  /** apply a torque to the DynamicCollider. */
  applyTorque(torque: Vector3): void {}
}
