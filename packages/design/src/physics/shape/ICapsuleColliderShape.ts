import { ICollider } from "../ICollider";

export interface ICapsuleColliderShape extends ICollider {
  setDirection(radius: number): void;
  setRadius(radius: number): void;
  setHeight(height: number): void;
}
