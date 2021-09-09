import { ICollider } from "./ICollider";

export interface IPhysicsManager {
  addCollider(collider: ICollider): void;
  removeCollider(collider: ICollider): void;
}
