import React, { Component } from 'react';
import Player from './Player';
import Food from './Food';
import { WORLD, SCREEN, KEY, SEEDS } from './Constants';

export class ReactArgio extends Component {
  state = {
    keys : {
      left  : 0,
      right : 0,
      up    : 0,
      down  : 0,
      space : 0,
    },
  }

  componentDidMount() {
    this.c = this.refs.canvas.getContext('2d');
    this.b = this.refs.backgroundLayer.getContext('2d', { alpha: false });
    this.viewport = document.getElementById('viewport');
    this._setBackgroundLayerStyles();
    this._attachListeners();
    this._drawGrid();
    this.startGame();
    requestAnimationFrame(this.update);
  }

  // With alpha set to false on 2d context for optimized performance,
  // set bg color styles.
  _setBackgroundLayerStyles() {
    this.b.fillStyle = "white";
    this.b.fillRect(0, 0, WORLD.WIDTH, WORLD.HEIGHT);
  }

  _attachListeners() {
    window.addEventListener('keyup',   this.handleKeys.bind(this, false));
    window.addEventListener('keydown', this.handleKeys.bind(this, true));
  }

  handleKeys(value, e){
    let keys = this.state.keys;

    if (e.keyCode === KEY.LEFT) keys.left = value;
    if (e.keyCode === KEY.RIGHT) keys.right = value;
    if (e.keyCode === KEY.UP) keys.up = value;
    if (e.keyCode === KEY.DOWN) keys.down = value;

    this.setState({
      keys : keys
    });
  }

  _drawGrid() {
    const b = this.b;
    let gw = WORLD.WIDTH;
    let gh = WORLD.HEIGHT;
    let padding = 20;

    b.save();

    for (var x = 0; x <= gw; x += 40) {
      b.beginPath();
      b.moveTo(x + padding, 0);
      b.lineTo(x + padding, gw + padding);
      b.strokeStyle = "#ccc";
      b.stroke();
    }


    for (var y = 0; y <= gh; y += 40) {
      b.beginPath();
      b.moveTo(0, y + padding);
      b.lineTo(gw + padding, y + padding);
      b.strokeStyle = "#ccc";
      b.stroke();
    }

    b.restore();
  }

  // _setCamera() {
  //   const c = this.c;

  //   c.save();
  //   c.translate(this.player.x - WORLD.WIDTH / );
  //   c.restore();
  // }

  _randomMinMax(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min);
  }

  _createFood() {
    let food = [];
    const min = 1;
    const max = WORLD.HEIGHT;
    for(let i = 0; i < SEEDS.FOOD; i++) {
      food.push(new Food({ canvas: this.c }));
    }

    return food;
  }

  _createComputerPlayers() {
    let bots = [];
    const min = 1;
    const max = WORLD.HEIGHT;
    for(let i = 0; i < SEEDS.AI; i++) {
      const x = this._randomMinMax(min, max);
      const y = this._randomMinMax(min, max);
      const position = { x, y };
      bots.push(new Player({ position, canvas: this.c, name: 'bot', color: "rgba(38, 105, 99, 1)" }));
    }

    return bots;
  }

  update = () => {
    // Clear the canvas on each update
    this.c.clearRect(0, 0, WORLD.WIDTH, WORLD.HEIGHT);
    this.viewport.scrollTop = (this.player.yPosition + this.player.radius) - SCREEN.HEIGHT / 2;
    this.viewport.scrollLeft = (this.player.xPosition + this.player.radius) - SCREEN.HEIGHT / 2;
    //this.c.translate(this.player.xPosition - WORLD.WIDTH / 2, this.player.yPosition - WORLD.HEIGHT / 2);

    // Update all bots
    for(let i = 0; i < this.bots.length; i++) {
      this.bots[i].update(this.state);
    }

    // Update all food
    for(let i = 0; i < this.food.length; i++) {
      this.food[i].update();
    }

    this.player.update(this.state);

    requestAnimationFrame(this.update);
  }

  startGame() {
    // Make player
    this.player = new Player({ 
      position: {
        x: WORLD.WIDTH / 2,
        y: WORLD.HEIGHT / 2,
      },
      canvas: this.c,
      name: 'player1',
    });

    this.bots = this._createComputerPlayers();
    this.food = this._createFood();
  }

  render() {
    return (
      <div id="viewport" ref="viewport" style={{ width: SCREEN.WIDTH, height: SCREEN.HEIGHT }}>
        <canvas ref="canvas" id="game-layer"
          width={WORLD.WIDTH}
          height={WORLD.HEIGHT}
        />
        <canvas ref="backgroundLayer" id="background-layer"
          width={WORLD.WIDTH}
          height={WORLD.HEIGHT}
        />
      </div>
    );
  }
}
