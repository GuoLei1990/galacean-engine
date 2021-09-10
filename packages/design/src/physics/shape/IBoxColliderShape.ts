import { Vector3 } from "@oasis-engine/math";
import { IColliderShape } from ".";

export interface IBoxColliderShape extends IColliderShape {
  size: Vector3;
}
