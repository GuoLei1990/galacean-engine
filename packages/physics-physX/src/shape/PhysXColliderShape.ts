import { IColliderShape } from "@oasis-engine/design";
import { IPhysicsMaterial } from "@oasis-engine/design/types/physics/IPhysicsMaterial";
import { Vector3 } from "@oasis-engine/math";

export class PhysXColliderShape implements IColliderShape {
  position: Vector3;
  rotation: Vector3;
  isTrigger: boolean;
  material: IPhysicsMaterial;
}
