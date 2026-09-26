export class Time {
  private _delta: number = 0;
  private lastTimeOrigin: number = window.performance.now();

  public get delta() {
    return this._delta;
  }

  public update(): void {
    this._delta = window.performance.now() - this.lastTimeOrigin;
    this.lastTimeOrigin += this._delta;
  }
}
