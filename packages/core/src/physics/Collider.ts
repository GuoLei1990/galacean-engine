import { ICollider } from "@oasis-engine/design";
import { Component } from "../Component";
import { ColliderShape } from "./shape/ColliderShape";

/**
 * Basic class of rigid body collider.
 */
export abstract class Collider extends Component {
  /** @internal */
  _nativeStaticCollider: ICollider;

  private _shapes: ColliderShape[];

  /** The shape of the Collider. */
  get shapes(): Readonly<ColliderShape[]> {
    return this._shapes;
  }

  /**
   * Add a collider shape.
   * @param shape - The collider shape.
   */
  addShape(shape: ColliderShape): void {}

  /**
   * Remove a collider shape.
   * @param shape - The collider shape.
   */
  removeShape(shape: ColliderShape): void {}

  /**
   * Clear all shape collection.
   */
  clearShapes(): void {}
}
