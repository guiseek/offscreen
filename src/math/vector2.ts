export class Vector2 {
  constructor(public x = 0, public y = 0) {}

  set(x: number, y: number) {
    this.x = x;
    this.y = y;

    return this;
  }

  setScalar(scalar: number) {
    this.x = scalar;
    this.y = scalar;

    return this;
  }

  setX(x: number) {
    this.x = x;

    return this;
  }

  setY(y: number) {
    this.y = y;

    return this;
  }

  clone() {
    return new Vector2(this.x, this.y);
  }

  copy(v: Vector2) {
    this.x = v.x;
    this.y = v.y;

    return this;
  }

  add(v: Vector2) {
    this.x += v.x;
    this.y += v.y;

    return this;
  }

  addScalar(s: number) {
    this.x += s;
    this.y += s;

    return this;
  }
}
