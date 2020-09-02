var tape = require("tape"),
    polygon = require("../");

tape("polygon().coords() returns coordinates", function(test) {
  const expected = [[1,0], [0,-1], [-1,0], [0,1]];
  const obj = polygon.regularPolygon(0,0,1,4);
  const actual = obj.coords();
  test.ok(
    expected.every((d, i) => {
      const diffx = Math.abs(d[0] - actual[i][0]);
      const diffy = Math.abs(d[1] - actual[i][1]);
      return diffx < 1e-15 && diffy < 1e-15;
    })
  );
  test.end();
});

tape("polygon().area() returns valid area", function(test) {
  const approxArea = polygon.regularPolygon()
    .radius(Math.sqrt(2))
    .edges(4)
    .area();
  test.ok(Math.abs(approxArea - 4) < 1e-15);
  test.end();
})

tape("permiter() works", function(test) {
  const approxPerimeter = polygon.regularPolygon()
    .radius(Math.sqrt(2))
    .edges(4)
    .perimeter();
  test.ok(Math.abs(approxPerimeter - 8) < 1e-15);
  test.end();
})

tape("sideLength() works", function(test) {
  const approxLength = polygon.regularPolygon()
    .radius(Math.sqrt(2))
    .edges(4)
    .sideLength();
  test.ok(Math.abs(approxLength - 2) < 1e-15);
  test.end();
})

tape("apothem() works", function(test) {
  const apothem = polygon.regularPolygon()
    .radius(Math.sqrt(2))
    .edges(4)
    .apothem();
  test.ok(Math.abs(apothem - 1) < 1e-15);
  test.end();
})