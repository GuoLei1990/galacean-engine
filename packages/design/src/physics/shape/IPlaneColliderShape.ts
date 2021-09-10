import { Vector3 } from "@oasis-engine/math/types/Vector3";
import { ICollider } from "../ICollider";

export interface IPlaneColliderShape extends ICollider {
  normal: Vector3;
  distance: number;
}
