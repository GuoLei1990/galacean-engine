import { Vector3 } from "@oasis-engine/math";
import { Collider } from "./Collider";

/**
 * Box-shaped collider.
 */
export class BoxCollider extends Collider {
  /** The size of this BoxCollider. */
  size: Vector3;
}
