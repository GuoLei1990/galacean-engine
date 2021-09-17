import { Quaternion, Vector3 } from "@oasis-engine/math";
import { IColliderShape } from ".";

export interface ICollider {
  getWorldTransform(outPosition: Vector3, outRotation: Quaternion): void;
  setWorldTransform(position: Vector3, rotation: Quaternion): void;
  
  addShape(shape: IColliderShape): void;
  removeShape(shape: IColliderShape): void;
  clearShapes(): void;
}
