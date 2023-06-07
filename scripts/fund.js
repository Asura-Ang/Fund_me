/*

Note always use npm or yarn (for solidity) after cloning the repo to install all dependencies.
Heading - Linting (Solhint)

- Linting is the process of running a program that will analyze code for potential errors.
Note-> Javascript code is lint using the ESLint.
- To Lint use the command - yarn solhint <filename>



 */

const { ethers, getNamedAccounts } = require("hardhat")

async function main() {
    const { deployer } = await getNamedAccounts()
    const fundMe = await ethers.getContract("FundMe", deployer)
    console.log(`Got contract FundMe at ${fundMe.address}`)
    console.log("Funding contract...")
    const transactionResponse = await fundMe.fund({
        value: ethers.utils.parseEther("0.1"),
    })
    await transactionResponse.wait()
    console.log("Funded!")
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
