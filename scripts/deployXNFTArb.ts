import { ethers, network } from "hardhat";

async function main() {
    const ccipRouterAddressArbitrumSepolia = "0x2a9C5afB0d0e4BAb2BCdaE109EC4b0c4Be15a165";
    const linkTokenAddressArbitrumSepolia = "0xb1D4538B4571d411F07960EF2838Ce337FE1E80E";
    const chainSelectorArbitrumSepolia = "3478487238524512106";

    const xNFT = await ethers.deployContract("XNFT", [ccipRouterAddressArbitrumSepolia, linkTokenAddressArbitrumSepolia, chainSelectorArbitrumSepolia]);
    await xNFT.waitForDeployment();

    console.log(`XNFT ARB deployed on ${network.name} with address ${xNFT.target}`)

}
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;

});
