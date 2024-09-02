import { ethers, network } from "hardhat";
import { Wallet } from "ethers";
import { XNFT, XNFT__factory } from "../typechain-types";

async function main() {
    if (network.name != `ethereumSepolia`) {
        console.error(`Must be called  from Ethereum Sepolia`);
        return 1;
    }
    const privateKey = process.env.PRIVATE_KEY!;
    const rpcProviderUrl = process.env.ETHEREUM_SEPOLIA_RPC_URL;

    const provider = new ethers.JsonRpcProvider(rpcProviderUrl);
    const wallet = new Wallet(privateKey);
    const signer = wallet.connect(provider);

    const xNftAddressEthSep = '0xf87c8F9CA669DAAC2b0E35B80e8b035FbF19A3b0';
    const xNftAddressArbSep = '0x5c14Ec2920424C5d27208e7Aab116C7769cB22e1';
    const chainSelectorArbitrumSepolia = '3478487238524512106';
    const ccipExtraArgs = "0x97a657c90000000000000000000000000000000000000000000000000000000000030d40";

    const xNft: XNFT = XNFT__factory.connect(xNftAddressEthSep, signer);

    const txn = await xNft.enableChain(chainSelectorArbitrumSepolia, xNftAddressArbSep, ccipExtraArgs);

    console.log(`Transaction hash: ${txn.hash}`);
}
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
