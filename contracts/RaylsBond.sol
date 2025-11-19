// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract RaylsBond is ERC20, Ownable {
    mapping(address => bool) public isWhitelisted;

    constructor() ERC20("Rayls Corp Bond", "RBOND") Ownable(msg.sender) {
        isWhitelisted[msg.sender] = true;
        _mint(msg.sender, 1000000 * 10 ** decimals());
    }

    function addToWhitelist(address _investor) external onlyOwner {
        isWhitelisted[_investor] = true;
    }

    function removeFromWhitelist(address _investor) external onlyOwner {
        isWhitelisted[_investor] = false;
    }

    function _update(address from, address to, uint256 value) internal override {
        if (from != address(0) && to != address(0)) {
            require(isWhitelisted[to], "Transfer Failed: Recipient is not Whitelisted!");
        }
        super._update(from, to, value);
    }
}