# UI for PancakeSwap V1 on BSC Testnet
Guide you to run the PancakeSwap V1 interface on the BSC Testnet environment from your personal computer.
For instructions on deploying PancakeSwap V1 on the BSC Testnet environment, see [pancake-swap-v1-bsc-testnet](https://github.com/laptrinhbockchain/pancake-swap-v1-bsc-testnet) or [Guideline for deploying PancakeSwap v1 on Binance Smart Chain BSC Testnet](https://laptrinhblockchain.net/huong-dan-trien-khai-pancake-swap-v1-tren-moi-truong-binance-smart-chain-bsc-testnet/)

## Requirements
1. NodeJs version 14 or newer
2. Install the required libraries with the command
```
npm install
```

## How to run
1. Type the following command to start running
```
node index.js
```
2. Browse the link http://localhost:8888/ on your browser. You can see UI as below image:
<br />![UI for PancakeSwap V1 on BSC Testnet](https://raw.githubusercontent.com/laptrinhbockchain/pancake-swap-v1-bsc-testnet-ui/cc57a45521612d85ced1cbc4acae45cb3fcb7400/pancake/ui.png)

<b>Note</b>: You can change <b>appDir</b> variable in [index.js](https://github.com/laptrinhbockchain/pancake-swap-v1-bsc-testnet-ui/blob/main/index.js) to run <b>HeraSwap</b> on <b>Cronos Testnet</b>. Remember don't change the value of the <b>port</b> variable.
