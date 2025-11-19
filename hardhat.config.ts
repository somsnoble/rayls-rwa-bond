import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config";

const PRIVATE_KEY = process.env.PRIVATE_KEY || "";

const config: HardhatUserConfig = {
  solidity: "0.8.20",
  networks: {
    rayls: {
      url: "https://devnet-rpc.rayls.com",
      chainId: 123123,
      accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [],
      timeout: 100000, // <--- NEW: Wait 100 seconds before giving up
    },
  },
};

export default config;