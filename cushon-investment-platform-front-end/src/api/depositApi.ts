import type { FundTypes } from "../state/userState";

export function deposit(
  depositValue: number,
  fundType: FundTypes,
  accountId: string
) {
  window.alert(
    `depositing £${depositValue} into ${fundType} fund for account ${accountId}`
  );
  /**
   * interface with the back end via fetch or another fetching library
   * example fetch function:
   * await fetch("endpoint/deposit", "POST", body: {
   *  depositValue,
   *  fundType
   *  accountId
   * }) */
}
