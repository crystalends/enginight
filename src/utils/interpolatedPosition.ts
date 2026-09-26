import type { TVector3D } from "../types/vectors";
import { Vector3D } from "./vector3D";

export class InterpolatedPosition {
  private _old: TVector3D;
  public real: TVector3D;
  private _fake: TVector3D;

  public get old() {
    return this._old;
  }

  public get fake() {
    return this._fake;
  }

  constructor(real: TVector3D) {
    this._old = Vector3D.clone(real);
    this.real = Vector3D.clone(real);
    this._fake = Vector3D.clone(real);
  }

  public actualizeOldPosition(): void {
    Vector3D.copy(this._old, this.real);
  }

  public actualizeFakePosition(alpha: number) {
    Vector3D.lerp(this._fake, this._old, this.real, alpha);
  }
}
