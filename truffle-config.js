const path = require("path");
const HDWalletProvider = require('@truffle/hdwallet-provider');

require('dotenv').config();
const infuraKey =  process.env.INFURA_API_KEY;
const privateKeys = [ process.env.PRIVATE_KEY ];

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    develop: {
      port: 8545
    },
	rinkeby: {
		provider: () => new HDWalletProvider(privateKeys, 'https://rinkeby.infura.io/v3/' + infuraKey),
		network_id: 4
	}
  }
};
