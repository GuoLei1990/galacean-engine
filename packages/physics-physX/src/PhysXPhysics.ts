import {
  IBoxColliderShape,
  ICapsuleColliderShape,
  IDynamicCollider,
  IPhysics,
  IPhysicsManager,
  IPlaneColliderShape,
  ISphereColliderShape,
  IStaticCollider,
  StaticInterfaceImplements
} from "@oasis-engine/design";
import { Vector3 } from "@oasis-engine/math";

@StaticInterfaceImplements<IPhysics>()
export class PhysXPhysics {
  static init(): Promise<void> {
    return null;
  }

  static createPhysicsManager(): IPhysicsManager {
    throw "";
  }

  static createStaticCollider(): IStaticCollider {
    throw "";
  }
  static createDynamicCollider(): IDynamicCollider {
    throw "";
  }

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

  private constructor() {
    
  }
}
