import { ICollider } from "../ICollider";

export interface ICapsuleColliderShape extends ICollider {
  setUpAxis(upAxis: number): void;
  setRadius(radius: number): void;
  setHeight(height: number): void;
}
