import { ICollider, IPhysicsManager } from "@oasis-engine/design";
import { Ray, Vector3 } from "@oasis-engine/math";

export class PhysXPhysicsManager implements IPhysicsManager {
  addCollider(collider: ICollider): void {}
  removeCollider(collider: ICollider): void {}
  raycast(
    ray: Ray,
    distance: number,
    layerMask: number,
    outHitResult?: (colliderID: number, distance: number, point: Vector3, normal: Vector3) => void
  ): Boolean {
    return false;
  }
}
