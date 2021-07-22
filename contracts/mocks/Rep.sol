pragma solidity 0.6.3;

import '@openzeppelin/contracts/token/ERC20/ERC20.sol';

contract Rep is ERC20 {
    constructor() ERC20("Augur token", "REP") public {
            _mint(msg.sender, 3149592654 * (10**uint256(decimals())));
        }
        function faucet(address to, uint amount) external {
    _mint(to, amount);
  }
}
