const expect = chai.expect;

mocha.setup("bdd");

// it("I can test", function () {
//     // expect(1 + 1).to.equal(2);
//     expect(NaN).to.be.NaN
// });

describe("Sum function test", () =>{
  it("2 + 2 should be 4", () => {
    expect(sum(2,2)).to.equal(4);
  })
  it("(2, 3) should be 5", () => {
    expect(sum(2 , 3)).to.equal(5);
  });

   it("(7, 6) should be 13", () => {
     expect(sum(7, 6)).to.equal(13);
   });
  
})

describe("Sum function test", () => {
  it("2 + 2 should be 4", () => {
    expect(2 + 2).to.equal(4);
  });
  it("2 + 2 should be 4", () => {
    expect(2 + 2).to.equal(4);
  });

  it("2 + 2 should be 4", () => {
    expect(2 + 2).to.equal(4);
  });
});



mocha.run();
