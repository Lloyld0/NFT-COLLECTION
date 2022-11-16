const { WHITELIST_CONTRACT_ADDRESS, METADATA_URL } = require("../constants");

const whitelistContract = WHITELIST_CONTRACT_ADDRESS;
  // URL from where we can extract the metadata for a Crypto Dev NFT
const metadataURL = METADATA_URL;

module.exports = [
    metadataURL,
    whitelistContract,
  ];
