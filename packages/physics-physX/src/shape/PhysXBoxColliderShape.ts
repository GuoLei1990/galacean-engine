import { IBoxColliderShape } from "@oasis-engine/design";
import { Vector3 } from "@oasis-engine/math";
import { PhysXColliderShape } from "./PhysXColliderShape";

export class PhysXBoxColliderShape extends PhysXColliderShape implements IBoxColliderShape {
  size: Vector3;
}
