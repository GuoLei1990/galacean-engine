import { Vector3 } from "@oasis-engine/math";
import { IPhysicsMaterial } from "../IPhysicsMaterial";

export interface IColliderShape {
  position: Vector3;
  rotation: Vector3;
  isTrigger: boolean;
  material: IPhysicsMaterial;
}
