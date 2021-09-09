// import { IPhysicsManagerStatic } from "@oasis-engine/design";
import { Entity } from "../Entity";
import { Collider } from "./Collider";

/**
 * A static rigid body collider component that will not move when colliding with a dynamic rigid body collider.
 * @remarks Mostly used for object which always stays at the same place and never moves around.
 */
export class StaticCollider extends Collider {
  constructor(entity: Entity) {
    super(entity);
    // this._nativeStaticCollider = IPhysicsManagerStatic.createStaticCollider();
  }
}
