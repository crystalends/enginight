import type { Renderer } from "./renderer";

export abstract class Script {
  public start?(): void;
  public update?(): void;
  public fixedUpdate?(): void;
  public render?(renderer: Renderer, alpha: number): void;
}
