import type { TVector3D } from "../types/vectors";

const DEG_TO_RAD = Math.PI / 180;

export class Position {
  private constructor() {}

  public static rotateAll(
    out: readonly TVector3D[],
    degrees: Readonly<TVector3D>,
  ): void {
    const length = out.length;
    if (length === 0) return;

    const angleX = degrees.x * DEG_TO_RAD;
    const angleY = degrees.y * DEG_TO_RAD;
    const angleZ = degrees.z * DEG_TO_RAD;
    const sinX = Math.sin(angleX);
    const cosX = Math.cos(angleX);
    const sinY = Math.sin(angleY);
    const cosY = Math.cos(angleY);
    const sinZ = Math.sin(angleZ);
    const cosZ = Math.cos(angleZ);

    const sinYSinX = sinY * sinX;
    const cosYSinX = cosY * sinX;
    const m00 = cosY * cosZ + sinYSinX * sinZ;
    const m01 = -cosY * sinZ + sinYSinX * cosZ;
    const m02 = sinY * cosX;
    const m10 = cosX * sinZ;
    const m11 = cosX * cosZ;
    const m12 = -sinX;
    const m20 = -sinY * cosZ + cosYSinX * sinZ;
    const m21 = sinY * sinZ + cosYSinX * cosZ;
    const m22 = cosY * cosX;

    for (let i = 0; i < length; i++) {
      const point = out[i];
      const { x, y, z } = point;
      point.x = m00 * x + m01 * y + m02 * z;
      point.y = m10 * x + m11 * y + m12 * z;
      point.z = m20 * x + m21 * y + m22 * z;
    }
  }

  public static rotate(out: TVector3D, degrees: Readonly<TVector3D>): void {
    const { x, y, z } = out;
    const angleX = degrees.x * DEG_TO_RAD;
    const angleY = degrees.y * DEG_TO_RAD;
    const angleZ = degrees.z * DEG_TO_RAD;
    const sinX = Math.sin(angleX);
    const cosX = Math.cos(angleX);
    const sinY = Math.sin(angleY);
    const cosY = Math.cos(angleY);
    const sinZ = Math.sin(angleZ);
    const cosZ = Math.cos(angleZ);

    const rotatedX = x * cosZ - y * sinZ;
    const rotatedY = x * sinZ + y * cosZ;
    const rotatedZ = rotatedY * sinX + z * cosX;

    out.x = rotatedX * cosY + rotatedZ * sinY;
    out.y = rotatedY * cosX - z * sinX;
    out.z = -rotatedX * sinY + rotatedZ * cosY;
  }
}
