import hre from "hardhat";

async function main() {
  console.log("Starting deployment to Rayls...");

  // ACCESS ETHERS THROUGH 'hre' (The Hardhat Runtime Environment)
  const RaylsBond = await hre.ethers.getContractFactory("RaylsBond");

  const bond = await RaylsBond.deploy();

  await bond.waitForDeployment();

  console.log("✅ RaylsBond deployed successfully!");
  console.log("📍 Address:", await bond.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});