import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { ethers } from "hardhat";

const WEI18 = BigInt(10 ** 18);

const DEPOSIT_TIME = 1710493200;

// const

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

describe.only("LaunchoPool", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  let deployData: any;

  async function deploy() {
    const [owner, ...users] = await ethers.getSigners();

    const lpFactory = await ethers.getContractFactory("LaunchPool");
    const contract = await lpFactory.deploy(owner.address);

    const erc20Factory = await ethers.getContractFactory("ERC20Mock");
    const token = await erc20Factory.deploy(18);

    //
    return {
      contract,
      contractAddress: await contract.getAddress(),
      token,
      tokenAddress: await token.getAddress(),
      owner,
      users,
    };
  }

  describe("Deployment", function () {
    it("[Success] deployment", async function () {
      deployData = await loadFixture(deploy);
      const { contractAddress, tokenAddress, owner, contract } = deployData;
      console.log(
        "Deployed to: ",
        contractAddress,
        tokenAddress,
        owner.address
      );
      // verify initial config
    });
  });
});
