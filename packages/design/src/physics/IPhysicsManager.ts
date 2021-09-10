import { Ray } from "@oasis-engine/math";
import { ICollider } from "./ICollider";
import { IHitResult } from "./IHitResult";

export interface IPhysicsManager {
  addCollider(collider: ICollider): void;
  removeCollider(collider: ICollider): void;
  raycast(ray: Ray, distance: number, layerMask: number, outHitResult: IHitResult): Boolean;
}
