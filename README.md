# d3-regular-polygon

This is a module for building regular polygons with a variable number of edges
in `d3`. It is built to work with SVG `path` tags
and `canvas`.

## Installing

If you use NPM, `npm install d3-polygon`. Otherwise, download the [latest release](https://github.com/maxblee/d3-regular-polygon/releases/latest).

## API Reference

<a href="#regular-polygon" name="regular-polygon"># <b>d3.regularPolygon</b>(cx = 0, cy = 0, r, edges, rotation = 0)</a>

Constructs a new default constructor for regular polygons. You can optionally set the center x position `cx`, the center y position `cy`, the radius `r`, the number of sides `edges`, or the rotation of the first vertex (in radians) `rotation`.

Starting with

```javascript
var poly = d3.regularPolygon()
```

you can also set those paramters using one of the following
method-chaining constructor methods:

### Constructor Methods

<a href="#_radius" name="radius"># poly.radius(r)</a>

Sets the radius of the polygon.

<a href="#_center" name="center"># poly.center(x, y)</a>

Sets the center of the polygon. If there is only one argument, it sets x = x[0], y = x[1].

<a href="#_edges" name="edges"># poly.edges(numEdges)</a>

Sets the number of sides the polygon has. Should be an integer
greater or equal to 3.

<a href="#_rotation" name="rotation">#poly.rotation(rotation)</a>

Sets the amount of (in radians) you want the polygon to rotate (relative to the position of the first vertex).

### Vertex methods

You can also get information about the vertices of your regular polygon. These methods are designed to make it easy to render the polygon in different contexts.

<a href="#_coords" name="coords"># poly.coords()</a>

Returns the coordinates as an array of 2-item arrays [[x0, y0], [x1,y1]], etc.

<a href="#_path" name="path"># poly.path()</a>

Returns the SVG path of the polygon (i.e. the d-attribute).

In other words, rendering the polygon is as easy as:

```javascript
d3.select("#my-graphic")
    .append("path")
    .attr("d", poly.path());
```

<a href="#_polygon" name="polygon"># poly.polygon()</a>

Returns the SVG `<polygon>` points attribute for the polygon.

In other words, you can also render a polygon as:

```javascript
selection.append("polygon")
    .attr("points", poly.polygon());
```

<a href="#_polygon" name="polygon"># poly.canvas(context)</a>

This renders the polygon to canvas. Here's an example of how to use that:

```javascript
var canvas = document.getElementById("my-canvas");
var context = canvas.getContext("2d");
context.fillStyle = "maroon";
poly.canvas(context);
context.fill();
```

### Measurements

Finally, you can run measurements of the polygon. This can
be useful if you want to dynamically size based on the value of certain elements (for instance, size elements based on the area or the perimeter of the polygon).

<a href="_apothem" name="apothem"># poly.apothem()</a>

This returns the size of the*apothem*, or the distance from the center of the polygon to the *midpoint* between any two vertices.

<a href="_side-length" name="side-length"># poly.sideLength()</a>

Shows the length of any given side.

<a href="_perimeter" name="perimeter"># poly.perimeter()</a>

Shows the perimeter of the polygon.

<a href="_area" name="area"># poly.area()</a>

Shows the area of the polygon.