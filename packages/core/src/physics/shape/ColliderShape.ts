import { IColliderShape } from "@oasis-engine/design";
import { Vector3 } from "@oasis-engine/math";
import { PhysicsMaterial } from "../PhysicsMaterial";

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

  /** @internal */
  _nativeShape: IColliderShape;
}
