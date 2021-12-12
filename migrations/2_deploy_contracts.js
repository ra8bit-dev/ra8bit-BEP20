require( 'dotenv' ).config();

const token = artifacts.require("RA8BITS");

console.log(token);

const migration = async function( deployer, network, accounts ) {
        await Promise.all([
                deployToken(deployer,network,accounts),
        ]);
};

module.exports = migration;

async function deployToken(deployer,network,accounts) {
        const ra8bit = await deployer.deploy(token);
}
