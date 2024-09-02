import { ethers, network } from "hardhat";
import { Wallet } from "ethers";
import { XNFT, XNFT__factory } from "../typechain-types";

async function main() {

    if (network.name != `arbitrumSepolia`) {
        console.error(`Must be called  from Arbitrum Sepolia`);
        return 1;
    }

    const privateKey = process.env.PRIVATE_KEY!;
    const rpcProviderUrl = process.env.ARBITRUM_SEPOLIA_RPC_URL;

    const provider = new ethers.JsonRpcProvider(rpcProviderUrl);
    const wallet = new Wallet(privateKey);
    const signer = wallet.connect(provider);

    const xNftAddressArbSep = 'x5c14Ec2920424C5d27208e7Aab116C7769cB22e1';
    const xNftAddressEthSep = '0xf87c8F9CA669DAAC2b0E35B80e8b035FbF19A3b0';
    const chainSelectorEthereumSepolia = '16015286601757825753';
    const ccipExtraArgs = "0x97a657c90000000000000000000000000000000000000000000000000000000000030d40";

    const xNFT: XNFT = XNFT__factory.connect(xNftAddressArbSep, signer);

    const txn = await xNFT.enableChain(chainSelectorEthereumSepolia, xNftAddressArbSep, ccipExtraArgs)
    console.log(`Transaction hash: ${txn.hash}`);
}
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});