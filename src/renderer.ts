import type { TVector2D, TVector3D } from "./types/vectors";

type TCtxType = "2d";

export class Renderer {
  private readonly _canvas;
  private _ctx;

  public get canvas() {
    return this._canvas!;
  }

  public get ctx() {
    return this._ctx!;
  }

  constructor(
    canvas: HTMLCanvasElement,
    ctxType: TCtxType,
    resolution: TVector2D,
  ) {
    const { x: width, y: height } = resolution;
    canvas.width = width;
    canvas.height = height;
    this._canvas = canvas;
    this._ctx = canvas.getContext(ctxType);
  }

  public ndcToScreen(out: TVector2D, { x, y }: Readonly<TVector2D>): void {
    const halfWidth = this.canvas.width / 2;
    const halfHeight = this.canvas.height / 2;

    out.x = halfWidth + x * halfWidth;
    out.y = halfHeight - y * halfHeight;
  }

  public project(out: TVector2D, { x, y, z }: Readonly<TVector3D>): void {
    if (z == 0) {
      out.x = x;
      out.y = y;
      return;
    }

    const aspect = this.canvas.width / this.canvas.height;

    out.x = x / z / aspect;
    out.y = y / z;
  }

  public clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}
