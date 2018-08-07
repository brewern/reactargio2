import { WORLD } from './Constants';

export default class Player {
  get xPosition() {
    return this.position.x;
  }

  get yPosition() {
    return this.position.y;
  }

  get radius() {
    return this.shape.radius;
  }

  constructor({ position, canvas, name, color }) {
    this.c = canvas;
    this.shape = {
      radius: 40,
      color: color || "rgba(204, 102, 153, 1)",
      x: WORLD.WIDTH / 2,
      y: WORLD.HEIGHT / 2,
    };
    this.name = name;
    this.velocity = {
      x: 0,
      y: 0
    };
    this.speed = 5;
    this.inertia = 0.99;
    this.position = Object.assign({}, {
      x: this.shape.x,
      y: this.shape.y,
      pX: this.shape.x,
      pY: this.shape.y,
    }, position);
    this.growRate = 1;

    this._drawBody(this.position.x, this.position.y);
  }

  _newPosition(x, y) {
    this.position = { x, y };
  }

  _drawBody(x, y) {
    const c = this.c;
    const { radius, color } = this.shape;
    this._newPosition(x, y);
    c.beginPath();
    c.arc(x, y, radius, 0, 2 * Math.PI, true);
    c.fillStyle = color;
    c.fill();
  }

  eat() {
    this.shape.radius = this.shape.radius + this.growRate;
  }

  update(state) {
    const { up, down, left, right } = state.keys;
    const radius = this.shape.radius;
    let x = this.position.x;
    let y = this.position.y;

    // Set prev x and y for clearing
    this.position.pX = x;
    this.position.pY = y;
  
    if (this.name === 'player1') {  
      // Move Y Direction
      if(up){
        y -= this.speed;
      } else if(down) {
        y += this.speed;
      }

      // Move X Direction
      if(left){
        x -= this.speed;
      } else if (right){
        x += this.speed;
      }

      // Screen edges
      if (x + radius > WORLD.WIDTH) x = x + -this.speed;
      else if (x - radius < 0) x = x - -this.speed;
      if (y + radius > WORLD.HEIGHT) y = y + -this.speed;
      else if (y - radius < 0) y = y - -this.speed;
    }

    this._drawBody(x, y);
  }
}
