# commit-batch

A simple "Hello World" Solidity smart contract project scaffolded with [Hardhat](https://hardhat.org/).

## Project structure

- `contracts/HelloWorld.sol` — the contract. Stores a greeting, exposes `greet()` to read it and `setGreeting()` to update it (emits a `GreetingChanged` event).
- `test/HelloWorld.js` — Mocha/Chai tests covering the default greeting and updates.
- `scripts/deploy.js` — deploys the contract and logs its address.
- `hardhat.config.js` — Hardhat configuration (Solidity 0.8.28).

## Getting started

Install dependencies:

```bash
npm install
```

Compile the contract:

```bash
npm run compile
```

Run the tests:

```bash
npm test
```

Deploy to a local Hardhat network:

```bash
npx hardhat node
npm run deploy -- --network localhost
```
