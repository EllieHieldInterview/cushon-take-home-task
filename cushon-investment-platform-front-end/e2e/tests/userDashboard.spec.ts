import test from "@playwright/test";
import { DepositModalPage } from "../pages/depositModalPage";
import { UserDashboardPage } from "../pages/userDashboardPage";

test.describe("User Dashboard Tests", () => {
  let userDashboardPage: UserDashboardPage;
  let depositModalPage: DepositModalPage;

  test.beforeEach(async ({ page }) => {
    // initialise pages
    userDashboardPage = new UserDashboardPage(page);
    depositModalPage = new DepositModalPage(page);

    // ideally use env variables to choose appropriate endpoint for each environment
    await page.goto("http://localhost:5173/");
  });

  test("should load page", async () => {
    await userDashboardPage.titleIsVisible();
    await userDashboardPage.accountsLoaded(2);
  });

  test("should deposit into ISA account", async () => {
    await userDashboardPage.openDepositModal("Cushon ISA");
    await depositModalPage.modalLoaded();
    await depositModalPage.selectFund("Global Tracker");
    await depositModalPage.inputDepositValue(25000);
    await depositModalPage.confirmDeposit();
  });

  /**
   * Other tests I would add at this stage:
   * - check validation prevents deposit with incorrect inputs
   * - check modal inputs are cleared on cancel
   * - repeat tests for pension account
   */
});
