import { config as dotEnvConfig } from "dotenv";
import { ethers } from "ethers";
dotEnvConfig();
import * as log4js from "log4js";

// if (process.env.PRIVATE_KEY === undefined) {
//   throw new Error("Private key is not defined");
// }
// const privateKey = process.env.PRIVATE_KEY;

log4js.configure({
  appenders: {
    bot: { type: "file", filename: `log/bot.log` },
    error: { type: "file", filename: `log/error.log` },
  },
  categories: {
    default: { appenders: ["bot"], level: "info" },
    error: { appenders: ["error"], level: "warn" },
  },
});

const logger = log4js.getLogger("bot");
const errLogger = log4js.getLogger("error");

export const main = async () => {
  logger.info("Started");
  // const provider = new ethers.providers.JsonRpcProvider(
  //   process.env.JSON_RPC_URL
  // );
  // const signer = new ethers.Wallet(privateKey, provider);
  // console.log(await signer.getBalance())
  errLogger.error("Error");
};

main().catch((error) => {
  console.error(error);
  errLogger.error(error);
  process.exit(1);
});
