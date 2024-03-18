//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ERC20Mock is ERC20 {
    uint8 private _decimals;

    constructor(uint8 decimals_) ERC20("USDC", "USDC") {
        _decimals = decimals_;
        _mint(msg.sender, 1_000_000_000 * (10 ** decimals()));
    }

    function decimals() public view virtual override returns (uint8) {
        return _decimals;
    }
}
