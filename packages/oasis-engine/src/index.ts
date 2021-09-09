export * from "@oasis-engine/core";
export * from "@oasis-engine/loader";
export * from "@oasis-engine/math";
export * from "@oasis-engine/rhi-webgl";
import {
  AmbientLight, Animator, Camera,
  Component,
  DirectLight,
  ParticleRenderer,
  PointLight, SpriteMask, SpriteRenderer
} from "@oasis-engine/core";
import { GLTFModel, Model, Parser } from "@oasis-engine/loader";

Parser.registerComponents("o3", {
  GLTFModel,
  SpriteRenderer,
  SpriteMask,
  PointLight,
  AmbientLight,
  DirectLight,
  ParticleRenderer,
  Camera,
  Model,
  Component,
  Animator
});

//@ts-ignore
export const version = `__buildVersion`;

console.log(`oasis engine version: ${version}`);
