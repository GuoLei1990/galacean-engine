import { ColliderShapeUpAxis } from "../enums/ColliderShapeUpAxis";
import { ColliderShape } from "./ColliderShape";

/**
 *  Capsule-shaped collider shape.
 */
export class CapsuleColliderShape extends ColliderShape {
  /** The radius of this CapsuleColliderShape. */
  radius: number;
  /** The height of this CapsuleColliderShape. */
  height: number;
  /** The up axis of this CapsuleColliderShape. */
  upAxis: ColliderShapeUpAxis;
}
