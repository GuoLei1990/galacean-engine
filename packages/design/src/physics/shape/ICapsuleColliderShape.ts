import { ICollider } from "../ICollider";

export interface ICapsuleColliderShape extends ICollider {
  setRadius(radius: number): void;
  setHeight(height: number): void;
}
