// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract HelloWorld {
    string private greeting;

    event GreetingChanged(string newGreeting);

    constructor() {
        greeting = "Hello, World!";
    }

    function greet() public view returns (string memory) {
        return greeting;
    }

    function setGreeting(string memory newGreeting) public {
        greeting = newGreeting;
        emit GreetingChanged(newGreeting);
    }
}
