import type { Renderer } from "../../renderer";
import { Script } from "../../script";

export class Example extends Script {
  public fixedUpdate(): void {}

  public render(renderer: Renderer, alpha: number): void {}
}
