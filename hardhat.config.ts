import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
// import "@nomiclabs/hardhat-etherscan";
import "@openzeppelin/hardhat-upgrades";
import "@nomicfoundation/hardhat-verify";
import "hardhat-contract-sizer"
import * as dotenv from "dotenv";

const path = ".env." + (process.env.NODE_ENV ? process.env.NODE_ENV : "dev")
dotenv.config({ path })

const accounts = [process.env.DEPLOYER_WALLET as string]

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      }
    }
  },
  networks: {
    // for mainnet
    "mainnet": {
      url: "https://special-stylish-sailboat.quiknode.pro/c3ac0bb44dde426be6861aa563ba8c10cdd40900/",
      accounts,
    },
    // for testnet
    "goerli": {
      url: "https://goerli.infura.io/v3/bf5ac8481ba949a29e60f97735f17bde",
      accounts,
    },
    // for mainnet
    "base-testnet": {
      url: "https://sepolia.base.org",
      accounts,
      gasPrice: 1000000000,
    },
    // for mainnet
    "base-mainnet": {
      url: "https://mainnet.base.org",
      accounts,
      gasPrice: 1000000000,
    },
    // manta
    "manta": {
      url: "https://pacific-rpc.manta.network/http",
      accounts,
    },
    // for mainnet
    "manta-testnet": {
      url: "https://pacific-rpc.testnet.manta.network/http",
      accounts,
    },
    arbitrumSepolia: {
      url: 'https://sepolia-rollup.arbitrum.io/rpc',
      chainId: 421614,
      accounts,
    },
    arbitrumOne: {
      url: 'https://arb1.arbitrum.io/rpc',
      accounts,
    },
    merlin: {
      url: 'https://rpc.merlinchain.io',
      accounts,
    },
    merlineTestnet: {
      url: 'https://testnet-rpc.merlinchain.io',
      accounts,
    },
    "blast-testnet": {
      url: 'https://special-alpha-snowflake.blast-sepolia.quiknode.pro/8718f67cb1649e8026827514d1d48cb97c69bebc',
      accounts,
    },
    "blast": {
      url: 'https://rpc.blast.io',
      accounts,
    },
  },
  etherscan: {
    apiKey: {
      "base-mainnet": "4M4S76TQJTXM8CJR2MWY1XX4VTSWYFHFKC",
      "goerli": "U9B9CIHXBY14C9JW3YN9W1JES2MJT63ZI2",
      "mainnet": "U9B9CIHXBY14C9JW3YN9W1JES2MJT63ZI2",
      "manta": "U9B9CIHXBY14C9JW3YN9W1JES2MJT63ZI2",
      "manta-testnet": "U9B9CIHXBY14C9JW3YN9W1JES2MJT63ZI2",
      "arbitrumOne": "UR4R9VKBXHXA7SZPE9EG5K7R34DGZ4HYX4",
      "merlin": "U9B9CIHXBY14C9JW3YN9W1JES2MJT63ZI2",
      "blast-testnet": "56M5MK9TIH184KFBUPKIKYZQF2G9KBA2MV",
      "blast": "56M5MK9TIH184KFBUPKIKYZQF2G9KBA2MV",
    },
    customChains: [
      {
        network: "chiliz-testnet",
        chainId: 88882,
        urls: {
          apiURL: "https://spicy-explorer.chiliz.com/api",
          browserURL: "https://spicy-explorer.chiliz.com",
        },
      },
      {
        network: "chiliz-mainnet",
        chainId: 88888,
        urls: {
          apiURL: "https://scan.chiliz.com/api",
          browserURL: "https://scan.chiliz.com"
        }
      },
      {
        network: "base-testnet",
        chainId: 84532,
        urls: {
          apiURL: "https://api-sepolia.basescan.org/api",
          browserURL: "	https://sepolia-explorer.base.org"
        }
      },
      {
        network: "base-mainnet",
        chainId: 8453,
        urls: {
          apiURL: "https://api.basescan.org/api",
          browserURL: "https://basescan.org"
        }
      },
      {
        network: "manta",
        chainId: 169,
        urls: {
          apiURL: "https://pacific-explorer.manta.network/api",
          browserURL: "https://pacific-explorer.manta.network"
        }
      },
      {
        network: "manta-testnet",
        chainId: 3441005,
        urls: {
          apiURL: "https://pacific-rpc.testnet.manta.network/http/api",
          browserURL: "https://pacific-rpc.testnet.manta.network"
        }
      },
      {
        network: "merlin",
        chainId: 4200,
        urls: {
          apiURL: "https://scan.merlinchain.io/api",
          browserURL: "https://scan.merlinchain.io/"
        }
      },
      {
        network: "blast-testnet",
        chainId: 168587773,
        urls: {
          apiURL_: "https://api-sepolia.blastscan.io/api",
          apiURL: "https://api.routescan.io/v2/network/testnet/evm/168587773/etherscan",
          browserURL: "https://testnet.blastscan.io"
        }
      },
      {
        network: "blast",
        chainId: 81457,
        urls: {
          apiURL: "https://api.blastscan.io/api",
          browserURL: "https://blastscan.io"
        }
      },
    ],
  },
  mocha: {
    timeout: 300000,
  },
  typechain: {
    outDir: "./typechain",
    target: "ethers-v6",
    alwaysGenerateOverloads: false,
    externalArtifacts: ["externalArtifact/*.json"],
    dontOverrideCompile: false,
  },
  defaultNetwork: "hardhat",
  contractSizer: {
    alphaSort: false,
    runOnCompile: true,
    disambiguatePaths: false,
  },

};

export default config;
