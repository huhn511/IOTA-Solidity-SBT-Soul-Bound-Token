require("dotenv").config();

require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-waffle");
require("hardhat-gas-reporter");
require("solidity-coverage");

const privateKey = process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : []

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    compilers: [
      { version: "0.8.13" },
      { version: "0.7.6" },
      { version: "0.6.6" }
    ]
  },
  networks: {
    isc: {
      url: "https://evm.wasp.sc.iota.org",
      chainId: 1074,
      accounts: privateKey,
      timeout: 120000
    },
    rinkeby: {
      url: `https://eth-rinkeby.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY}`,
      //accounts: [process.env.PRIVATE_KEY,process.env.USER1_PRIVATE_KEY,],
      accounts: [process.env.PRIVATE_KEY,process.env.USER1_PRIVATE_KEY],
    },
    kovan: {
      url: `https://eth-kovan.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY}`,
      accounts: [process.env.PRIVATE_KEY,process.env.USER1_PRIVATE_KEY,],
    },
    local: {
      url: `http://127.0.0.1:8545`,
      accounts: [process.env.PRIVATE_KEY,process.env.USER1_PRIVATE_KEY,],
    },
    hardhat: {
      forking: {
        url: `https://eth-rinkeby.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY}`,
        accounts: [process.env.PRIVATE_KEY,process.env.USER1_PRIVATE_KEY,],
      }
    },
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  mocha: {
    timeout: 100000000
  },
};
