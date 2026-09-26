import type { Renderer } from "./renderer";
import type { Script } from "./script";
import type { Time } from "./time";

export class Engine {
  private accumulation: number = 0;
  private alpha: number = 0;
  private tickTime: number;

  constructor(
    private time: Time,
    private renderer: Renderer,
    private scripts: Script[],
    tickRate: number = 64,
  ) {
    this.tickTime = 1000 / tickRate;
  }

  public start() {
    for (let i = 0; i < this.scripts.length; i++) {
      this.scripts[i].start?.();
    }
  }

  public gameLoop() {
    this.time.update();
    this.accumulation += Math.min(this.time.delta, 250);

    while (this.accumulation >= this.tickTime) {
      for (let i = 0; i < this.scripts.length; i++) {
        this.scripts[i].fixedUpdate?.();
      }

      this.accumulation -= this.tickTime;
    }

    this.alpha = this.accumulation / this.tickTime;

    for (let i = 0; i < this.scripts.length; i++) {
      this.scripts[i].update?.();
    }

    this.renderer.clear();

    for (let i = 0; i < this.scripts.length; i++) {
      this.scripts[i].render?.(this.renderer, this.alpha);
    }

    requestAnimationFrame(() => this.gameLoop());
  }
}
