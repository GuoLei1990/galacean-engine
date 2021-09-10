import { ICollider } from "../ICollider";

export interface ISphereColliderShape extends ICollider {
  setRadius(radius: number): void;
}
