import { Ray, Vector3 } from "@oasis-engine/math";
import { ICollider } from "./ICollider";

export interface IPhysicsManager {
  addCollider(collider: ICollider): void;
  removeCollider(collider: ICollider): void;
  raycast(
    ray: Ray,
    distance: number,
    layerMask: number,
    outHitResult?: (colliderShapeID: number, distance: number, point: Vector3, normal: Vector3) => void
  ): Boolean;
}
