import { Vector3 } from "@oasis-engine/math";
import { IColliderShape } from ".";

export interface IBoxColliderShape extends IColliderShape {
  setSize(size: Vector3): void;
}
