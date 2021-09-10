import { IBoxColliderShape } from "@oasis-engine/design";
import { Vector3 } from "@oasis-engine/math";

export class PhysXBoxColliderShape implements IBoxColliderShape {
  size: Vector3;
}
