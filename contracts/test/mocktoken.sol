// SPDX-License-Identifier: GPL-3.0
pragma solidity =0.5.16;

import "@openzeppelin/contracts/token/ERC20/ERC20Detailed.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/ownership/Ownable.sol";

contract MockToken is ERC20Detailed, ERC20, Ownable {
    address public minter;

    constructor(string memory name, string memory symbol, uint8 decimal) public ERC20Detailed(name, symbol, decimal) {
    }

    function mint(address _to, uint256 _amount) public onlyOwner {
        _mint(_to, _amount);
    }
}
