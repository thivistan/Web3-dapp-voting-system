require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

const { PRIVATE_KEY } = process.env;
const ALCHEMY_API_KEY = 'JTpfLA75NmX74xsNOPzFBgMuWEBkdkYp'; // Replace with your Alchemy API key

module.exports = {
   solidity: "0.8.11",
   defaultNetwork: "volta",
   networks: {
      hardhat: {},
      volta: {
         url: `https://eth-mainnet.alchemyapi.io/v2/${ALCHEMY_API_KEY}`, // Use the Alchemy RPC URL
         accounts: [`0x${PRIVATE_KEY}`],
         gas: 210000000,
         gasPrice: 800000000000,
      }
   },
}
