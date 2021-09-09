import { PhysicsMaterialCombineMode } from "./enums/PhysicsMaterialCombineMode";

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
