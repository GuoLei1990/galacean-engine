import { Vector3 } from "@oasis-engine/math";
import { Component } from "../Component";
import { PhysicsMaterial } from "./PhysicsMaterial";

/**
 * Basic class of collider.
 */
export abstract class Collider extends Component {
  /** The rotation of this Collider. */
  position: Vector3;
  /** The rotation of this Collider. */
  rotation: Vector3;
  /** Whether the collider is a trigger. */
  isTrigger: boolean;
  /** The physic material of this collider. */
  material: PhysicsMaterial;
}
