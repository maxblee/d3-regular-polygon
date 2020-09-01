class Polygon {
  constructor(cx = 0, cy = 0, r, edges, rotation = 0) {
    this._build(cx, cy, r, edges, rotation);
  }

  _build(cx = 0, cy = 0, r, edges, rotation = 0) {
    this._cx = cx;
    this._cy = cy;
    this._r = r;
    this._edges = edges;
    this._rotation = rotation;
  }

  radius(r) {
    this._r = r; 
    return this;
  }

  center(x, y) {
    let cx,cy;
    if (arguments.length === 1) {
      [cx, cy] = x;
    } else {
      cx = x;
      cy = y;
    }
    this._cx = cx;
    this._cy = cy;
    return this;
  }

  edges(numEdges) {
    this._edges = numEdges;
    return this;
  }

  rotation(rotation) {
    this._rotation = rotation;
    return this;
  }

  coords() {
    let polygonCoords = [];
    for (let i=0; i < this._edges; i++) {
      const angle = ((2 * Math.PI * i) / this._edges) + this._rotation;
      const xPoint = this._cx + (Math.cos(angle) * this._r);
      const yPoint = this._cy - (Math.sin(angle) * this._r);
      polygonCoords.push([xPoint, yPoint]);
    }
    return polygonCoords;
  }

  path() {
    const coords = this.coords();
    const coordPath = coords.map(d => d.join(" ")).join(" L ");
    return `M ${coordPath}`;
  }
}

function polygon(cx = 0, cy = 0, r, edges, rotation = 0) {
  return new Polygon(cx, cy, r, edges, rotation);
}

export default polygon;
