import { ethers, network } from "hardhat";

async function main() {
    const ccipRouterAddressEthereumSepolia = "0x0BF3dE8c5D3e8A2B34D2BEeB17ABfCeBaf363A59";
    const linkTokenAddressEthereumSepolia = "0x779877A7B0D9E8603169DdbD7836e478b4624789";
    const chainSelectorEthereumSepolia = "16015286601757825753";

    const xNFT = await ethers.deployContract("XNFT", [ccipRouterAddressEthereumSepolia, linkTokenAddressEthereumSepolia, chainSelectorEthereumSepolia]);

    await xNFT.waitForDeployment();
    console.log(`XNFT ETH deployed on ${network.name} with address ${xNFT.target}`);
}
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;

});