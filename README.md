# 📚 Decentralized-Bookshop

A Decentralized Bookshop running on the Ethererum blockchain. Anyone can put up a book for sale and get paid in ETH.

### 🏚 Structure

The directory is made up of two open source smart contracts written in solidity in the [contracts](https://github.com/haitham-akram/Decentralized-Bookshop/tree/main/contracts) folder, OpenBooks and Bookshop currently deployed on the Ethereum ropsten.infura testnet.
The [client](https://github.com/haitham-akram/Decentralized-Bookshop/tree/main/client) directory holds the frontend of the dapp built using Reactjs.

## 🎉 Features

- ### Dashboard

  The dashboard shows all your books with different sections for books for sale and books not for sale. It also gives you buttons to withdraw proceeds made from selling books and to mint (add) a new book to "My Books" section.

- ### Market

  The market shows you all the books up for sale including your listed books

- ### Mint page
  Clicking on the "Mint Book" button on your dashboard takes you to a page to upload your book and its image and then mint the book.
- ### Book page
  This page gives you the option to delete, list, delist, buy or change the price of a book. You'll see different options depending on if you are the book's owner and if it is listed.

## 🔖 How to Mint

If you have a book for sale and you own the rights to the book you can decide to put it up for sale. To do that you have to mint a book first. When minting a book you'll provide the name of the book, picture of the book and the book itself. They'll all be uploaded to Firebase (presently), and when the upload is done, you are told to mint by signing a mint transaction. This creates an ER721 token representation of your book owned by your address.

## 💰 How to Sell

After minting you'll see the wallet in your dashboard. Click on it for more information. You'll be able to list it for sale after entering a price. When a purchase is successfully made on your book, the balance on your dashboard is immediately updated and this can be withdrawn at anytime. When you withdraw, you empty your balance.

## 💳 How to Buy

To buy a token it has to be listed for sale. You will find tokens listed for sale with their prices in the maket section. To buy one, click on it to view properly then select the buy button before signing a transaction. When your transaction gets confirmed, you'll be shown the download button. You must download the book on that page as you won't be able to download it again.

## Others

You can also delete, delist or change the price of your book.

## 📟 Technologies

- Firebase: The images and book files are currently stored using firebase.
- ERC721: The OpenBooks smart contract implements the ERC721 standard.
- Reactjs, Solidity, [Web3React](https://github.com/NoahZinsmeister/web3-react), ethersjs

## 🛠 Development

### Perequisites

- Truffle (v5.1.5)
- Node (v12.6.1)
  **Note**: The versions specified are the versions used in the project's development. Other versions might also be compatible.

### Setup

#### Deploying the smart contract

- Clone this repository.
- Have a local blockchain instance(e.g [Ganache](https://www.trufflesuite.com/ganache)) running on port `8545` in your computer.
- Open your command line and install truffle `npm install -g truffle`
- Open Ganache application and create your WORKSPACE or select QUICKSTART WORKSPACE and ensure that the app running on port 8545
- Copy MNEMONIC which is your special secret this is created for you by Ganache. It's used to generate the addresses available during development as well as sign transactions sent from those addresses.
- Go to [truffle-config](https://github.com/haitham-akram/Decentralized-Bookshop/tree/main/truffle-config.js) and paste your MNEMONIC in hdWalletProvider function.
- Create an account in [infura](https://infura.io/) and copy your Link which will be like this `https://ropsten.infura.io/v3/YOUR PROJECT ID` and paste it after MNEMONIC in hdWalletProvider function.
- Open your command line in the root root repos context and run`truffle migrate --reset` which redeploys the contracts on your local instance.
- You have to run `npm install` in the root directory if you intend working on the smart contracts.

#### Running the client

- Go to the client directory and run `npm install` on your command line.
- Run `npm run start` to get the client running on port `3000` on your computer.
- If your browser does not open automatically go to `localhost:3000` in your browser to view the view the client.

#### Contract Interaction

- To interact with the smart contract from your browser, you need to have a plugin(e.g [Metamask](https://metamask.io/)) installed.
- Ensure you have a local blockchain instance running on your computer.
- Go to your Metamask wallet and add new network name it as you like ,put `HTTP://127.0.0.1:8545` For RPC URL ,`1337` For Chain ID and `ETH` For Currency Symbol.
- Go to Ganache again and then copy PRIVATE KEY of any account then go to your Metamask wallet and import option and paste the PRIVATE KEY "repeat this step for the second account".
- Start interacting with the smartcontract with the client.

#### Tests

- To run tests run `truffle test` in your command line.
- Ensure you have a local blockchain instance running before testing.
