import { IColliderShape } from ".";

export interface ICollider {
  addShape(shape: IColliderShape): void;
  removeShape(shape: IColliderShape): void;
  clearShapes(): void;
}
