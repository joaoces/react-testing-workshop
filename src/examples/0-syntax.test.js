describe.skip("The name of your suite. Should already provide some context.", () => {
  beforeEach(() => {
    console.log("🏋️‍♀️ Running beforeEach function");
  });

  afterEach(() => {
    console.log("🧹 Running afterEach function");
  });

  // This is the test implementation itself.
  test("should <expectation> when <input>", () => {
    console.log("🏋️‍♀️ 0 - Here should go test specific bootstrap logic");

    console.log("👷 1 - Test triggers");

    console.log("🧪 2 - Test expectations");

    console.log("🔁 Repeat 1 and 2 if necessary");
  });
});
