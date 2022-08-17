const expect = chai.expect;

mocha.setup("bdd");

// it("I can test", function () {
//     // expect(1 + 1).to.equal(2);
//     expect(NaN).to.be.NaN
// });

describe("Sum function test", () =>{
  it("2 + 2 should be 4", () => {
    expect(2 + 2).to.equal(4);
  })
})

describe("Sum function test", () => {
  it("2 + 2 should be 4", () => {
    expect(2 + 2).to.equal(4);
  });
  it("2 + 2 should be 4", () => {
    expect(2 + 2).to.equal(4);
  });

  it("2 + 2 should be 4", () => {
    expect(2 + 2).to.equal(3);
  });
});



mocha.run();
