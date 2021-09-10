import { ICollider } from "../ICollider";

export interface ICapsuleColliderShape  extends ICollider{
  radius: number;
  height: number;
}
