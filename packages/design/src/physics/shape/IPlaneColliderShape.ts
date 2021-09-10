import { Vector3 } from "@oasis-engine/math/types/Vector3";
import { ICollider } from "../ICollider";

export interface IPlaneColliderShape extends ICollider {
  setNormal(value: Vector3): void;
  setDistance(distance: number): void;
}
