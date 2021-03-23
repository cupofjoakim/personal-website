import Point from './Point';

export default class Blob {
  constructor() {
    this.points = [];
  }
  
  init() {
    for(let i = 0; i < this.numPoints; i++) {
      let point = new Point(this.divisional * ( i + 1 ), this);
      this.push(point);
    }
  }
  
  render() {
    let canvas = this.canvas;
    let ctx = this.ctx;
    let pointsArray = this.points;
    let points = this.numPoints;
    
    ctx.clearRect(0,0,canvas.width,canvas.height);
    
    pointsArray[0].solveWith(pointsArray[points-1], pointsArray[1]);

    let p0 = pointsArray[points-1].position;
    let p1 = pointsArray[0].position;
    let _p2 = p1;

    ctx.beginPath();
    ctx.moveTo( (p0.x + p1.x) / 2, (p0.y + p1.y) / 2 );

    for(let i = 1; i < points; i++) {
      let p2 = pointsArray[i].position;
      if (p0 === p2) {
        console.log("currently on last point", p0);
      }
      
      pointsArray[i].solveWith(pointsArray[i-1], pointsArray[i+1] || pointsArray[0]);
      
      var xc = (p1.x + p2.x) / 2;
      var yc = (p1.y + p2.y) / 2;
      
      ctx.quadraticCurveTo(p1.x, p1.y, xc, yc);

      p1 = p2;
    }

    // Final point
    var xc = (p1.x + _p2.x) / 2;
    var yc = (p1.y + _p2.y) / 2;
    ctx.quadraticCurveTo(p1.x, p1.y, xc, yc);

    ctx.closePath();

    ctx.fillStyle = this.color;
    ctx.fill();
    
    requestAnimationFrame(this.render.bind(this));
  }
  
  push(item) {
    if(item instanceof Point) {
      this.points.push(item);
    }
  }
  
  set color(value) {
    this._color = value;
  }
  get color() {
    return this._color || '#000000';
  }
  
  set canvas(value) {
    if(value instanceof HTMLElement && value.tagName.toLowerCase() === 'canvas') {
      this._canvas = value;
      this.ctx = this._canvas.getContext('2d');
    }
  }
  get canvas() {
    return this._canvas;
  }
  
  set numPoints(value) {
    if(value > 2) {
      this._points = value;
    }
  }
  get numPoints() {
    return this._points || 10;
  }
  
  set radius(value) {
    if(value > 0) {
      this._radius = value;
    }
  }
  get radius() {
    return this._radius || 150;
  }
  
  set position(value) {
    if(typeof value == 'object' && value.x && value.y) {
      this._position = value;
    }
  }
  get position() {
    return this._position || { x: 0.5, y: 0.5 };
  }
  
  get divisional() {
    return Math.PI * 2 / this.numPoints;
  }
  
  get center() {
    return { x: this.canvas.width * this.position.x, y: this.canvas.height * this.position.y };
  }
  
  set running(value) {
    this._running = value === true;
  }
  get running() {
    return this.running !== false;
  }
}