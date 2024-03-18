//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";

contract LaunchPool is ReentrancyGuard {
    using SafeERC20 for IERC20Metadata;

    address private _owner;

    constructor(address owner) {
        _owner = owner;
    }
}
