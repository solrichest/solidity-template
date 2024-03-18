import hre, { ethers, upgrades, network } from "hardhat";
import "dotenv/config";
import crypto from "crypto";
import { formatEther, Wallet } from "ethers";
import { getContracts, writeContract } from "../../utils/utils";

async function main() {
  const [deployer] = await ethers.getSigners();
  const networkName = network.name
  const FactoryName = "LaunchPool"

  console.log("Deploying contracts with the account:", deployer.address);
  console.log(
    "Balance: ",
    formatEther(await deployer.provider.getBalance(deployer.address))
  );

  const contracts = getContracts()
  console.log(contracts);

  let contractAddress: any = contracts?.[networkName]?.[FactoryName]

  if (!contractAddress) {
    console.log("Deploying contract");
    const Factory = await ethers.getContractFactory(FactoryName, deployer);
    const contract = await Factory.deploy(deployer.address)

    contractAddress = await contract.getAddress();
    console.log("Deployed to: ", contractAddress)
    // write to data
    writeContract(networkName, FactoryName, contractAddress)
  } else {
    console.log("Contract Already Deployed: ", contractAddress);
  }

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
