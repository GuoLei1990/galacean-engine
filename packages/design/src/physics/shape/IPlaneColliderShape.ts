import { Vector3 } from "@oasis-engine/math";
import { ICollider } from "../ICollider";

export interface IPlaneColliderShape extends ICollider {
  setNormal(radius: Vector3): void;
}
