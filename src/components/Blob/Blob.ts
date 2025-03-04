import Point from "./Point";

type SimpleCoords = Record<"x" | "y", number>;

export default class Blob {
	points: Point[] = [];
	_points = 10;
	_color = "#000000";
	_canvas: HTMLCanvasElement | null;
	ctx: CanvasRenderingContext2D | null;
	_running = true;
	_position: SimpleCoords = { x: 0.5, y: 0.5 };
	_radius = 150;

	constructor(canvas: HTMLCanvasElement | null, color: string) {
		this._canvas = canvas;
		this._color = color;

		const ctx = canvas?.getContext("2d");

		if (canvas !== null && ctx === null) {
			throw new Error("Failed to init canvas");
		}
		this.ctx = ctx ?? null;
	}

	init() {
		for (let i = 0; i < this.numPoints; i++) {
			const point = new Point(this.divisional * (i + 1), this);
			this.push(point);
		}
	}

	render() {
		const canvas = this.canvas;
		const ctx = this.ctx;
		const pointsArray = this.points;
		const points = this.numPoints;

		ctx?.clearRect(0, 0, canvas?.width ?? 0, canvas?.height ?? 0);

		pointsArray[0].solveWith(pointsArray[points - 1], pointsArray[1]);

		const p0 = pointsArray[points - 1].position;
		let p1 = pointsArray[0].position;
		const _p2 = p1;

		ctx?.beginPath();
		ctx?.moveTo((p0.x + p1.x) / 2, (p0.y + p1.y) / 2);

		for (let i = 1; i < points; i++) {
			const p2 = pointsArray[i].position;
			if (p0 === p2) {
				console.log("currently on last point", p0);
			}

			pointsArray[i].solveWith(
				pointsArray[i - 1],
				pointsArray[i + 1] || pointsArray[0],
			);

			const xc = (p1.x + p2.x) / 2;
			const yc = (p1.y + p2.y) / 2;

			ctx?.quadraticCurveTo(p1.x, p1.y, xc, yc);

			p1 = p2;
		}

		// Final point
		const xc = (p1.x + _p2.x) / 2;
		const yc = (p1.y + _p2.y) / 2;
		ctx?.quadraticCurveTo(p1.x, p1.y, xc, yc);

		ctx?.closePath();

		if (ctx) {
			ctx.fillStyle = this.color;
		}
		ctx?.fill();

		requestAnimationFrame(this.render.bind(this));
	}

	push(item: Point) {
		if (item instanceof Point) {
			this.points.push(item);
		}
	}

	set color(value) {
		this._color = value;
	}
	get color() {
		return this._color || "#000000";
	}

	get canvas() {
		return this._canvas;
	}

	set numPoints(value) {
		if (value > 2) {
			this._points = value;
		}
	}
	get numPoints() {
		return this._points || 10;
	}

	set radius(value) {
		if (value > 0) {
			this._radius = value;
		}
	}
	get radius() {
		return this._radius || 150;
	}

	set position(value: SimpleCoords) {
		if (typeof value === "object" && value.x && value.y) {
			this._position = value;
		}
	}
	get position() {
		return this._position || { x: 0.5, y: 0.5 };
	}

	get divisional() {
		return (Math.PI * 2) / this.numPoints;
	}

	get center() {
		if (!this.canvas) {
			return { x: 0, y: 0 };
		}
		return {
			x: this.canvas.width * this.position.x,
			y: this.canvas.height * this.position.y,
		};
	}

	set running(value) {
		this._running = value === true;
	}
	get running(): boolean {
		return this.running !== false;
	}
}
