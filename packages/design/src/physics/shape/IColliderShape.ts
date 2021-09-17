import { Vector3 } from "@oasis-engine/math";
import { IPhysicsMaterial } from "../IPhysicsMaterial";

export interface IColliderShape {
  setPosition(position: Vector3): void;
  setWorldScale(scale: Vector3): void;
  setIsTrigger(isTrigger: boolean): void;
  setMaterial(material: IPhysicsMaterial): void;
}
