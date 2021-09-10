import { Vector3 } from "@oasis-engine/math";

export interface IHitResult {
  colliderID: number;
  distance: number;
  point: Vector3;
  normal: Vector3;
}
