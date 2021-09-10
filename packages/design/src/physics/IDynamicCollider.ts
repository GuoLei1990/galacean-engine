import { Vector3 } from "@oasis-engine/math";
import { ICollider } from ".";

export interface IDynamicCollider extends ICollider {
  linearVelocity: number;
  angularVelocity: number;
  linearDamping: number;
  angularDamping: number;
  mass: number;
  isKinematic: boolean;

  applyForce(force: Vector3): void;
  applyTorque(torque: Vector3): void;
}
