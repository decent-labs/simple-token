# Simple Token

This repository contains a simple ERC20 token codebase, with the necessary tooling for simple configuration and deployment.

## Setup

### System Dependencies

Install the following programs

* `git` - https://git-scm.com/book/en/v2/Getting-Started-Installing-Git
* `yarn` - https://yarnpkg.com/en/docs/install
* `metamask` - https://metamask.io/

### Codebase

Clone this repository to your local machine

```bash
$ git clone https://github.com/decentorganization/simple-token
```

### App Dependencies

`cd` into the `simple-token` directory, and install dependencies

```bash
$ yarn install
```

### Environment Configuration

Create a `.env` file to hold configuration values, by copying `.env.example`

```bash
$ cp .env.example .env
```

Open the new `.env` file and edit as you see fit

## Local Development

### Local Blockchain

Start up a `truffle dev` environment, which includes a local blockchain, for local testing and development

```bash
$ yarn run truffle dev
```

Take note of the output, specifically the first entry `(0)` under `Private Keys`.
Copy it to your clipboard then head to the next step.

### Metamask Setup

First connect to the locally-running blockchain from within Metamask

* Click on the Network Dropdown
* Select "Custom RPC"
* Scroll to "New Network"
* Type in `http://localhost:9545` in the "New RPC URL" field
* Click SAVE

Next, import the local blockchain account into Metamask

* Click on the Accounts button in the top right corner
* Click "Import Account"
* Paste the Private Key from above into the box titled "Paste your private key string here:"
* Click IMPORT

You should see that you have 100 ETH in your account.

### Deploy Contracts Locally

From within the `truffle` REPL, migrate (deploy) the contracts onto the local blockchain with the `migrate` command

```bash
truffle(develop)> migrate
```

Copy the `contract address` under the `2_deploy_simple_token.js` section: `Deploying 'SimpleToken'`.
This is the address at which the new token lives on our local blockchain, we'll add it to Metamask next.

### Add the token to Metamask

We can add our newly migrated token to Metamask, to check our balance and interact with the token

* Click the hamburger menu button
* Click "Add Token" at the bottom
* Click the "Custom Token" tab
* Paste the token's address into the "Token Address" field
* The "Token Symbol" and "Decimals of Precision" fields should automatically fill in
* Click "Next
* Click "Add Tokens"

You should see your token balance

## Deployment

Use `truffle migrate` to deploy the contracts to a network

```bash
$ yarn run truffle migrate
```

Specify a network with the `--network` flag

```bash
$ yarn run truffle migrate --network ropsten
```

Note:
The `truffle-config.js` configuration is not currently set up for any live networks

---

Made with 💜 in Cleveland
