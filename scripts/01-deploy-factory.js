const { ethers } = require("hardhat");


async function main() {
	const [deployer] = await ethers.getSigners();
	console.log('deployer address,', deployer.address)
	const UniswapV2FactoryContract = await ethers.getContractFactory('UniswapV2Factory')
	console.log('deploy factory')
	const factory = await UniswapV2FactoryContract.deploy(deployer.address)
	console.log('factory address,', factory.address)

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
