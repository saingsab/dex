pragma solidity 0.6.3;

import '@openzeppelin/contracts/token/ERC20/ERC20.sol';

contract Dai is ERC20 {
    constructor() ERC20("Dai Stablecoin", "DAI") public {
            _mint(msg.sender, 3149592654 * (10**uint256(decimals())));
        }
}
