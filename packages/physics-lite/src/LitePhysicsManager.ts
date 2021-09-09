import {
  ICollider, IPhysicsManager
} from "@oasis-engine/design";

export class LitePhysics implements IPhysicsManager {
  addCollider(collider: ICollider): void {}
  removeCollider(collider: ICollider): void {}
}
