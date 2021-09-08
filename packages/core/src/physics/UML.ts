import { Ray, Vector3 } from "@oasis-engine/math";
import { Component } from "../Component";
import { Engine } from "../Engine";
import { HitResult } from "../HitResult";
import { Layer } from "../Layer";

export abstract class Collider extends Component {
  /** The rotation of this Collider. */
  position: Vector3;
  /** The rotation of this Collider. */
  rotation: Vector3;
  /** Whether the collider is a trigger. */
  isTrigger: boolean;
  /** The physic material of this collider. */
  material: PhysicsMaterial;
}

/**
 * Box-shaped collider.
 */
export class BoxCollider extends Collider {
  /** The size of this BoxCollider. */
  size: Vector3;
}

/**
 *  Capsule-shaped collider.
 */
export class CapsuleCollider extends Collider {
  /** The radius of this CapsuleCollider. */
  radius: number;
  /** The height of this CapsuleCollider. */
  height: number;
}

/**
 * Plane-shaped collider.
 */
export class PlaneCollider extends Collider {
  /** The normal of this PlaneCollider. */
  normal: Vector3;
}

/**
 *  Sphere-shaped collider.
 */
export class SphereCollider extends Collider {
  /** The radius of this SphereCollider. */
  radius: number;
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

  /** The friction bounce mode.*/
  bounceCombine: number;

  /** The friction combine mode. */
  frictionCombine: number;
}
