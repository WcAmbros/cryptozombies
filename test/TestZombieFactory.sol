pragma solidity ^0.4.19;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/ZombieFactory.sol";

contract TestZombieFactory is ZombieFactory {

    function testDnaDigits() public{
        uint expected = 16;
        Assert.equal(dnaDigits, expected,"dnaDigits != 16");
    }
    function testDnaModulus() public{
        uint expected = 10**dnaDigits;
        Assert.equal(dnaModulus, expected,"dnaModulus != 10^dnaDigits");
    }

    function testCreateRandomZombie() public{
        createRandomZombie('testZombie');
        uint expected = 1;
        Assert.equal(zombies.length, expected," error create zombie");
    }
}
