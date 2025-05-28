import { expect, Locator, Page } from "playwright/test";

export class UserDashboardPage {
  private readonly title: Locator;
  private readonly accountCards: Locator;

  constructor(public readonly page: Page) {
    this.title = page.getByText("Welcome");
    this.accountCards = page.getByTestId("account-card");
  }

  async titleIsVisible(): Promise<void> {
    await expect(this.title).toBeVisible();
  }

  async accountsLoaded(numberOfAccounts: number): Promise<void> {
    await expect(this.accountCards).toHaveCount(numberOfAccounts);
    // could check other details about accounts
  }

  async openDepositModal(accountType: string): Promise<void> {
    // get specific account card by title text
    const accountCard = this.accountCards.getByText(accountType).locator("..");
    await accountCard.getByText("Make Deposit").click();
  }
}
