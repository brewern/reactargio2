import { WORLD } from './Constants';

export default class Food {
  get xPosition() {
    return this.position.x;
  }

  get yPosition() {
    return this.position.y;
  }

  get radius() {
    return this.shape.radius;
  }

  constructor({ canvas }) {
    this.c = canvas;
    this.shape = {
      radius: 10,
      color: "rgba(40, 100, 176, 1)",
    };
    this.position = {
      x: this._randomMinMax(1, WORLD.WIDTH),
      y: this._randomMinMax(1, WORLD.HEIGHT),
    };

    this._drawBody(this.position.x, this.position.y);
  }

  _drawBody(x, y) {
    const c = this.c;
    const { radius, color } = this.shape;
    c.beginPath();
    c.arc(x, y, radius, 0, 2 * Math.PI, true);
    c.fillStyle = color;
    c.fill();
  }

  _randomMinMax(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min);
  }

  update() {
    this._drawBody(this.position.x, this.position.y);
  }
}
