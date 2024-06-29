import {ethers} from "hardhat";

async function deployPermit2() {
    const Permit2 = await ethers.getContractFactory('Permit2');
    const permit2 = await Permit2.deploy();

    console.log(await permit2.getAddress());
}

deployPermit2().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
