import { Vector3 } from "@oasis-engine/math";
import { ICollider } from "./ICollider";
import { IDynamicCollider } from "./IDynamicCollider";
import { IStaticCollider } from "./IStaticCollider";
import { ICapsuleColliderShape } from "./shape/ICapsuleColliderShape";
import { IPlaneColliderShape } from "./shape/IPlaneColliderShape";
import { ISphereColliderShape } from "./shape/ISphereColliderShape";

export interface IPhysicsManager {
  addCollider(collider: ICollider): void;
  removeCollider(collider: ICollider): void;
}

export interface IPhysicsManagerType {
  new (): IPhysicsManager;

  createSphereColliderShape(radius: number): ISphereColliderShape;
  createPlaneColliderShape(normal: Vector3): IPlaneColliderShape;
  createCapsuleColliderShape(): ICapsuleColliderShape;

  createStaticCollider(): IStaticCollider;
  createDynamicCollider(): IDynamicCollider;
}
