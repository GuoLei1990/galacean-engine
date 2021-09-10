import { Vector3 } from "@oasis-engine/math";
import { IBoxColliderShape } from ".";
import { IDynamicCollider } from "./IDynamicCollider";
import { IPhysicsManager } from "./IPhysicsManager";
import { IStaticCollider } from "./IStaticCollider";
import { ICapsuleColliderShape } from "./shape/ICapsuleColliderShape";
import { IPlaneColliderShape } from "./shape/IPlaneColliderShape";
import { ISphereColliderShape } from "./shape/ISphereColliderShape";

export interface IPhysics {
  createPhysicsManager(): IPhysicsManager;

  createStaticCollider(): IStaticCollider;
  createDynamicCollider(): IDynamicCollider;

  createBoxColliderShape(size: Vector3): IBoxColliderShape;
  createSphereColliderShape(radius: number): ISphereColliderShape;
  createPlaneColliderShape(normal: Vector3,distance:number): IPlaneColliderShape;
  createCapsuleColliderShape(radius: number, height: number): ICapsuleColliderShape;
}
