import {
  IBoxColliderShape,
  ICapsuleColliderShape,
  ICollider,
  IDynamicCollider,
  IPhysicsManagerType,
  IPlaneColliderShape,
  ISphereColliderShape,
  IStaticCollider,
  StaticInterfaceImplements
} from "@oasis-engine/design";
import { Vector3 } from "@oasis-engine/math";

@StaticInterfaceImplements<IPhysicsManagerType>()
export class PhysXPhysicsManager {
  static createBoxColliderShape(size: Vector3): IBoxColliderShape {
    throw "";
  }
  static createSphereColliderShape(radius: number): ISphereColliderShape {
    throw "";
  }
  static createPlaneColliderShape(normal: Vector3): IPlaneColliderShape {
    throw "";
  }
  static createCapsuleColliderShape(): ICapsuleColliderShape {
    throw "";
  }
  static createStaticCollider(): IStaticCollider {
    throw "";
  }
  static createDynamicCollider(): IDynamicCollider {
    throw "";
  }
  addCollider(collider: ICollider): void {}
  removeCollider(collider: ICollider): void {}
}
