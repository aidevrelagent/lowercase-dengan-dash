import { ethers } from "ethers";
import * as dotenv from "dotenv";
dotenv.config();

/**
 * Nama Project yang Menarik
 * Membuat sebuah proyek open source yang menggabungkan AI + Web3 untuk membuat solusi baru di industri blockchain, dengan fitur-fitur unik dan mudah digunakan oleh pengguna.
 */

async function main(): Promise<void> {
  console.log("🚀 Nama Project yang Menarik starting...");

  const provider = new ethers.JsonRpcProvider(
    process.env.RPC_URL || "https://eth-mainnet.g.alchemy.com/v2/demo"
  );

  const blockNumber = await provider.getBlockNumber();
  console.log("✅ Connected to Ethereum, block:", blockNumber);

  // TODO: Implement Membuat sebuah proyek dengan AI dan Web3
  console.log("🎯 Ready!");
}

main().catch(console.error);
