const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("HelloWorld", function () {
  async function deployFixture() {
    const HelloWorld = await ethers.getContractFactory("HelloWorld");
    const helloWorld = await HelloWorld.deploy();
    return helloWorld;
  }

  it("should greet with the default message", async function () {
    const helloWorld = await deployFixture();
    expect(await helloWorld.greet()).to.equal("Hello, World!");
  });

  it("should update the greeting and emit an event", async function () {
    const helloWorld = await deployFixture();

    await expect(helloWorld.setGreeting("gm"))
      .to.emit(helloWorld, "GreetingChanged")
      .withArgs("gm");

    expect(await helloWorld.greet()).to.equal("gm");
  });
});
