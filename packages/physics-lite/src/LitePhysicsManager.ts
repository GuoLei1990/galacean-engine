import { ICollider, IPhysicsManager } from "@oasis-engine/design";
import { IHitResult } from "@oasis-engine/design/types/physics/IHitResult";
import { Ray } from "@oasis-engine/math";

export class LitePhysics implements IPhysicsManager {
  addCollider(collider: ICollider): void {}
  removeCollider(collider: ICollider): void {}
  raycast(ray: Ray, distance: number, layerMask: number, outHitResult: IHitResult): Boolean {
    return false;
  }
}
