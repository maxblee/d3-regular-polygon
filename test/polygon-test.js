var tape = require("tape"),
    polygon = require("../");

tape("polygon() returns the answer to the ultimate question of life, the universe, and everything.", function(test) {
  test.equal(polygon.polygon(), 42);
  test.end();
});
