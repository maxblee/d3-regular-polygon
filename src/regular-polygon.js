class RegularPolygon {
  /**
   * An object representing a 2-dimentional regular polygon
   * with 3 or more sides.
   * 
   * @param {number} cx - The x position of the center. Defaults to 0.
   * @param {number} cy - The y position of the center. Defaults to 0.
   * @param {number} r - The radius of the polygon
   * @param {number} edges - The number of edges (should be an integer >= 3)
   * @param {number} rotation - The angle where you want the first vertex to appear (in radians.) Defaults to 0.
   */
  constructor(cx = 0, cy = 0, r, edges, rotation = 0) {
    this._cx = cx;
    this._cy = cy;
    this._r = r;
    this._edges = edges;
    this._rotation = rotation;
  }

  _chain(cx, cy, r, edges, rotation) {
    return new RegularPolygon(cx, cy, r, edges, rotation)
  }

  /**
   * Sets the radius of the polygon
   * @param {number} r - The radius you want to set the object to
   */
  radius(r) {
    return this._chain(this._cx, this._cy, r, this._edges, this._rotation);
  }

  /**
   * Sets the center coordinates of the polygon.
   * @param {number} x - The x position of the center
   * @param {number} y - The y position of the center
   */
  center(x, y) {
    let cx,cy;
    if (arguments.length === 1) {
      [cx, cy] = x;
    } else {
      cx = x;
      cy = y;
    }
    return this._chain(cx, cy, this._r, this._edges, this._rotation);
  }

  /**
   * Sets the number of edges for the polygon.
   * @param {number} numEdges - The number of sides you want the polygon to have
   */
  edges(numEdges) {
    return this._chain(this._cx, this._cy, this._r, numEdges, this._rotation);
  }

  /**
   * Sets the amount you want the polygon to rotate
   * @param {number} rotation - Set how much you want the polygon to rotate.
   */
  rotation(rotation) {
    return this._chain(this._cx, this._cy, this._r, this._edges, rotation);
  }

  /**
   * Returns the coordinates of the polygon. You must enter information
   * about the radius and the edges in order for this to work (the center coordinates
   * and the rotation are optional but default to 0)
   */
  coords() {
    let polygonCoords = [];
    for (let i=0; i < this._edges; i++) {
      const angle = (this.arcAngle(i)) + this._rotation;
      const xPoint = this._cx + (Math.cos(angle) * this._r);
      const yPoint = this._cy - (Math.sin(angle) * this._r);
      polygonCoords.push([xPoint, yPoint]);
    }
    return polygonCoords;
  }

  /**
   * Returns the coordinates as an SVG path (d attribute.)
   */
  path() {
    const coords = this.coords();
    const coordPath = coords.map(d => d.join(" ")).join(" L ");
    return `M ${coordPath}`;
  }

  /**
   * Returns the polygon as an SVG polygon string.
   */
  polygon() {
    return this.coords().map(d => d.join(",")).join(" ");
  }

  /**
   * Draws the polygon to a canvas context (running beginPath and endPath)
   * @param {object} context - Canvas context.
   */
  canvas(context) {
    context.beginPath();
    const coords = this.coords();
    context.moveTo(...coords[0]);
    coords.slice(1, coords.length).forEach((e) => {context.lineTo(...e);});
    context.closePath();
  }

 /**
  * 
  * @param {number} [i] - The integer vertex from the first one rendered (0)
  */
  arcAngle(i) {
    const factor = i === undefined ? 1 : i;
    return (2 * i * Math.PI) / this._edges;
  }

  /**
   * Returns the length of the apothem (the midpoint of 
   * the triangle that's formed by the center of the polygon
   * and any two adjacent vertices)
   */
  apothem() {
    return this._r * (Math.cos(Math.PI / this._edges));
  }

  /**
   * Returns the length of each side of the polygon
   */
  sideLength() {
    return this._r * 2 * (Math.sin(Math.PI / this._edges));
  }

  /**
   * Returns the perimeter of the polygon
   */
  perimeter() {
    return this._edges * this.sideLength();
  }

  /**
   * Returns the area of the polygon.
   */
  area() {
    return this.perimeter() * this.apothem() / 2.;
  }
  
}

function regularPolygon(cx = 0, cy = 0, r, edges, rotation = 0) {
  return new RegularPolygon(cx, cy, r, edges, rotation);
}

export default regularPolygon;
