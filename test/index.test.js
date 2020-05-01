const tap = require("tap");

const formater = require("../formater");

tap.test("Numbers List", (subtest) => {
  subtest.test("Formater Helper", (t) => {
    const result = formater("3,5,7,2,12,4,1");
    const expected = [1, 2, 3, 4, 5, 7, 12];
    t.deepEqual(result, expected, "Should return numbers splited");
    t.done();
  });

  subtest.done();
});
