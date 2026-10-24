const test = require("node:test");
const assert = require("node:assert/strict");
const greet = require("./app");

test("greet returns the correct welcome message", () => {
  const result = greet("DevOps Learner");

  assert.equal(
    result,
    "Hello, DevOps Learner! Welcome to my AWS DevOps CI project."
  );
});
