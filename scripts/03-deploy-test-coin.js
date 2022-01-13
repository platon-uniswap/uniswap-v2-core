const { ethers } = require("hardhat");


async function main() {
	const [deployer] = await ethers.getSigners();
	console.log('deployer address,', deployer.address)
	const ERC20Contract = await ethers.getContractFactory('MockToken')
	console.log('deploy usdt')
	const usdt = await ERC20Contract.deploy("Tether dollar", "USDT", 6)
	console.log('usdt address,', usdt.address)
	await usdt.mint(deployer.address, ethers.utils.parseUnits('1000000', 6))

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
