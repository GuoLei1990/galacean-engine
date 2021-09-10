import {
  IBoxColliderShape,
  ICapsuleColliderShape,
  IDynamicCollider,
  IPhysics,
  IPhysicsManager,
  IPlaneColliderShape,
  ISphereColliderShape,
  IStaticCollider
} from "@oasis-engine/design";
import { Vector3 } from "@oasis-engine/math";
import { StaticInterfaceImplement } from "./StaticInterfaceImplement";

@StaticInterfaceImplement<IPhysics>()
export class LitePhysics {
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
}
