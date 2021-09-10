import { Vector3 } from "@oasis-engine/math";

export interface IDynamicCollider {
  linearVelocity: number;
  angularVelocity: number;
  linearDamping: number;
  angularDamping: number;
  mass: number;
  isKinematic: boolean;

  applyForce(force: Vector3): void;
  applyTorque(torque: Vector3): void;
}
