import { ethers } from "ethers";

export const getBigNumber = (amount: number, decimals = 18) => {
  return ethers.utils.parseUnits(amount.toString(), decimals);
};

export const preventUnderflow = (amount: number, decimals: number): string => {
  if (amount.toString().length > decimals) {
    return amount.toFixed(decimals).toString();
  }
  return amount.toString();
};
