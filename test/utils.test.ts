import { ethers } from "ethers";
import { getBigNumber } from "../src/utils";

describe("Utils", () => {
  describe("check util functions", () => {
    test("getBigNumber", () => {
      expect(ethers.BigNumber.from(1_000_000).eq(getBigNumber(1, 6))).toBe(
        true
      );
    });
  });
});
