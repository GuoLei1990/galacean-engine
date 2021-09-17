import { IColliderShape } from "@oasis-engine/design";
import { IPhysicsMaterial } from "@oasis-engine/design/types/physics/IPhysicsMaterial";
import { Vector3 } from "@oasis-engine/math";

export class PhysXColliderShape implements IColliderShape {
  setPosition(position: Vector3): void {}
  setIsTrigger(isTrigger: boolean): void {}
  setMaterial(material: IPhysicsMaterial): void {}
}
