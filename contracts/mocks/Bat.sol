pragma solidity 0.6.3;

import '@openzeppelin/contracts/token/ERC20/ERC20.sol';

contract Bat is ERC20 {
  constructor() ERC20("BAT Token", "BAT") public {
          _mint(msg.sender, 3149592654 * (10**uint256(decimals())));
      }
}
