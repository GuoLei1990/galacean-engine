import { Ray, Vector3 } from "@oasis-engine/math";
import { Component } from "../Component";
import { Engine } from "../Engine";
import { HitResult } from "../HitResult";
import { Layer } from "../Layer";

/**
 * Basic class of collider shape.
 */
export abstract class ColliderShape {
  /** The rotation of this ColliderShape. */
  position: Vector3;
  /** The rotation of this ColliderShape. */
  rotation: Vector3;
  /** Whether the ColliderShape is a trigger. */
  isTrigger: boolean;
  /** The physic material of this ColliderShape. */
  material: PhysicsMaterial;
}

/**
 * Box-shaped collider shape.
 */
export class BoxColliderShape extends ColliderShape {
  /** The size of this BoxColliderShape. */
  size: Vector3;
}

/**
 *  Sphere-shaped collider shape.
 */
export class SphereColliderShape extends ColliderShape {
  /** The radius of this SphereColliderShape. */
  radius: number;
}

/**
 * Plane-shaped collider shape.
 */
export class PlaneColliderShape extends ColliderShape {
  /** The normal of this PlaneColliderShape. */
  normal: Vector3;
  /** The distance of this PlaneColliderShape. */
  distance: number;
}

/**
 *  Capsule-shaped collider shape.
 */
export class CapsuleColliderShape extends ColliderShape {
  /** The radius of this CapsuleColliderShape. */
  radius: number;
  /** The height of this CapsuleColliderShape. */
  height: number;
}

/**
 * Basic class of rigid body collider.
 */
export abstract class Collider extends Component {
  /** The shape of the Collider. */
  get shapes(): Readonly<ColliderShape[]> {
    return null;
  }

  /**
   * Add a collider shape.
   * @param shape - The collider shape.
   */
  addShape(shape: ColliderShape): void {}

  /**
   * Remove a collider shape.
   * @param shape - The collider shape.
   */
  removeShape(shape: ColliderShape): void {}

  /**
   * Clear all shape collection.
   */
  clearShapes(): void {}
}

/**
 * A static rigid body collider component that will not move when colliding with a dynamic rigid body collider.
 * @remarks Mostly used for object which always stays at the same place and never moves around.
 */
export class StaticCollider extends Collider {}

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

  /** apply a force to the DynamicCollider. */
  applyForce(force: Vector3): void {}

  /** apply a torque to the DynamicCollider. */
  applyTorque(torque: Vector3): void {}
}
export class PhysicsManager {
  constructor(engine: Engine) {}

  /**
   * Casts a ray through the Scene and returns the first hit.
   * @param ray - The ray
   * @returns Returns true if the ray intersects with a Collider, otherwise false.
   */
  raycast(ray: Ray): Boolean;

  /**
   * Casts a ray through the Scene and returns the first hit.
   * @param ray - The ray
   * @param outHitResult - If true is returned, outHitResult will contain more detailed collision information
   * @returns Returns true if the ray intersects with a Collider, otherwise false.
   */
  raycast(ray: Ray, outHitResult: HitResult): Boolean;

  /**
   * Casts a ray through the Scene and returns the first hit.
   * @param ray - The ray
   * @param distance - The max distance the ray should check
   * @returns Returns true if the ray intersects with a Collider, otherwise false.
   */
  raycast(ray: Ray, distance: number): Boolean;

  /**
   * Casts a ray through the Scene and returns the first hit.
   * @param ray - The ray
   * @param distance - The max distance the ray should check
   * @param outHitResult - If true is returned, outHitResult will contain more detailed collision information
   * @returns Returns true if the ray intersects with a Collider, otherwise false.
   */
  raycast(ray: Ray, distance: number, outHitResult: HitResult): Boolean;

  /**
   * Casts a ray through the Scene and returns the first hit.
   * @param ray - The ray
   * @param distance - The max distance the ray should check
   * @param layerMask - Layer mask that is used to selectively ignore Colliders when casting
   * @returns Returns true if the ray intersects with a Collider, otherwise false.
   */
  raycast(ray: Ray, distance: number, layerMask: Layer): Boolean;

  /**
   * Casts a ray through the Scene and returns the first hit.
   * @param ray - The ray
   * @param distance - The max distance the ray should check
   * @param layerMask - Layer mask that is used to selectively ignore Colliders when casting
   * @param outHitResult - If true is returned, outHitResult will contain more detailed collision information
   * @returns Returns true if the ray intersects with a Collider, otherwise false.
   */
  raycast(ray: Ray, distance: number, layerMask: Layer, outHitResult: HitResult): Boolean;

  raycast(
    ray: Ray,
    distanceOrResult?: number | HitResult,
    layerMaskOrResult?: Layer | HitResult,
    outHitResult?: HitResult
  ): Boolean {
    return false;
  }
}

/**
 * Describe how to handle with collisions between colliders.
 */
export class PhysicsMaterial {
  /** The bounciness of collider surface. */
  bounciness: number;

  /** The friction coefficient used when already moving. */
  dynamicFriction: number;

  /** The friction coefficient used when an object is lying on a surface. */
  staticFriction: number;

  /** The friction bounce mode. */
  bounceCombine: PhysicsMaterialCombineMode;

  /** The friction combine mode. */
  frictionCombine: PhysicsMaterialCombineMode;
}

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
