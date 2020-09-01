var tape = require("tape"),
    polygon = require("../");

tape("polygon().coords() returns coordinates", function(test) {
  const expected = [[1,0], [0,-1], [-1,0], [0,1]];
  const obj = polygon.polygon(0,0,1,4);
  const actual = obj.coords();
  test.ok(
    expected.every((d, i) => {
      const diffx = Math.abs(d[0] - actual[i][0]);
      const diffy = Math.abs(d[1] - actual[i][1]);
      return diffx < Number.EPSILON && diffy < Number.EPSILON;
    })
  );
  test.end();
});
