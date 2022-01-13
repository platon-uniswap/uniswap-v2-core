const { ethers } = require("hardhat");
const {bytecode} = require('../artifacts/contracts/UniswapV2Pair.sol/UniswapV2Pair.json')


async function main() {
	const [deployer] = await ethers.getSigners();
    const initCodeHash = ethers.utils.keccak256(Buffer.from(bytecode.slice(2), 'hex'))
    console.log('init code hash,', initCodeHash)
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
