import '@nomicfoundation/hardhat-toolbox'
import '@nomicfoundation/hardhat-foundry'
import "@nomicfoundation/hardhat-ethers";

const taraxaMnemonic = process.env.TARAXA_MNEMONIC || '';

module.exports = {
  solidity: {
    version: '0.8.17',
    settings: {
      viaIR: true,
      optimizer: {
        enabled: true,
        runs: 1000000,
      },
    },
  },
  networks: {
    hardhat: {
      forking: {
        url: 'https://rpc.testnet.taraxa.io',
      },
      accounts: {
        mnemonic: taraxaMnemonic
      },
      chainId: 842,
      hardfork: 'berlin',
      gas: 'auto',
      gasMultiplier: 1,
    },
    localhost: {
      forking: {
        url: 'https://rpc.testnet.taraxa.io',
      },
      accounts: {
        mnemonic: taraxaMnemonic
      },
      chainId: 842,
      hardfork: 'berlin',
      gas: 'auto',
      gasMultiplier: 1,
    },
    taraxa: {
      url: 'https://rpc.mainnet.taraxa.io',
      chainId: 841,
      accounts: {
        mnemonic: taraxaMnemonic
      },
      hardfork: 'berlin'
    },
    taraxa_testnet: {
      url: 'https://rpc.testnet.taraxa.io',
      chainId: 842,
      accounts: {
        mnemonic: taraxaMnemonic
      },
      hardfork: 'berlin',
    },
  },
};
