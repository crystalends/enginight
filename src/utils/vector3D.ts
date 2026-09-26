import type { TVector3D } from "../types/vectors";

export class Vector3D {
  private constructor() {}

  public static clone(vector: Readonly<TVector3D>): TVector3D {
    return { x: vector.x, y: vector.y, z: vector.z };
  }

  public static copy(out: TVector3D, vector: Readonly<TVector3D>): void {
    out.x = vector.x;
    out.y = vector.y;
    out.z = vector.z;
  }

  public static add(
    out: TVector3D,
    a: Readonly<TVector3D>,
    b: Readonly<TVector3D>,
  ): void {
    out.x = a.x + b.x;
    out.y = a.y + b.y;
    out.z = a.z + b.z;
  }

  public static subtract(
    out: TVector3D,
    a: Readonly<TVector3D>,
    b: Readonly<TVector3D>,
  ): void {
    out.x = a.x - b.x;
    out.y = a.y - b.y;
    out.z = a.z - b.z;
  }

  public static scale(
    out: TVector3D,
    vector: Readonly<TVector3D>,
    scalar: number,
  ): void {
    out.x = vector.x * scalar;
    out.y = vector.y * scalar;
    out.z = vector.z * scalar;
  }

  public static lerp(
    out: TVector3D,
    a: Readonly<TVector3D>,
    b: Readonly<TVector3D>,
    alpha: number,
  ): void {
    out.x = a.x + (b.x - a.x) * alpha;
    out.y = a.y + (b.y - a.y) * alpha;
    out.z = a.z + (b.z - a.z) * alpha;
  }
}
