require('dotenv').config()

var SimpleToken = artifacts.require("./SimpleToken.sol");

module.exports = function(deployer) {
  deployer.deploy(SimpleToken, 
    process.env.NAME,
    process.env.SYMBOL,
    process.env.DECIMALS,
    process.env.TOTAL_SUPPLY);
};
