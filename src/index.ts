import { config as dotEnvConfig } from "dotenv";
import { ethers } from "ethers";
dotEnvConfig();

// if (process.env.PRIVATE_KEY === undefined) {
//   throw new Error("Private key is not defined");
// }
// const privateKey = process.env.PRIVATE_KEY;

export const main = async () => {
  // const provider = new ethers.providers.JsonRpcProvider(
  //   process.env.ALCHEMY_POLYGON_RPC_URL
  // );
  // const signer = new ethers.Wallet(privateKey, provider);
  // console.log(await signer.getBalance())
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
