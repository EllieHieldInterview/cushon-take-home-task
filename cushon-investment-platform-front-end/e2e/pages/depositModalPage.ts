import { expect, Locator, Page } from "playwright/test";

export class DepositModalPage {
  private readonly modalTitle: Locator;
  private readonly fundSelect: Locator;
  private readonly valueInput: Locator;
  private readonly cancelButton: Locator;
  private readonly confirmButton: Locator;

  constructor(public readonly page: Page) {
    const modalRoot = page.locator(".mantine-Modal-root");
    this.modalTitle = modalRoot.getByText("Deposit");
    this.fundSelect = modalRoot.getByPlaceholder("select fund");
    this.valueInput = modalRoot.getByTestId("deposit-value-number-input");
    this.cancelButton = modalRoot.getByText("Cancel");
    this.confirmButton = modalRoot.getByText("Confirm");
  }

  async modalLoaded() {
    await expect(this.modalTitle).toBeVisible();
    await expect(this.fundSelect).toBeVisible();
    await expect(this.valueInput).toBeVisible();
    await expect(this.cancelButton).toBeVisible();
    await expect(this.confirmButton).toBeVisible();
  }

  async selectFund(selectedFund: string) {
    await this.fundSelect.click();
    await this.page.getByRole("option").getByText(selectedFund).click();
  }

  async inputDepositValue(value: number) {
    await this.valueInput.fill(value.toString());
  }

  async confirmDeposit() {
    this.page.on("dialog", async (dialog) => {
      expect(dialog.type()).toContain("alert");
      // ideally would check the message more thoroughly
      expect(dialog.message()).toContain("depositing");
      await dialog.accept();
    });
    await this.confirmButton.click();
  }

  // cancelDeposit() {}

  // closeModal() {}
}
