import {test, expect} from '@playwright/test';
test.describe("Kiểm thử chức năng tính tiền điện bằng E2E TEST", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("/tinh-tien-dien.html");
    });
    //TEST CASE 1: bỏ trống input, phải báo lỗi "Vui lòng nhập số kWh tiêu thụ"
    test("TC-E2E-01 Hiển thị thông báo lỗi khi bỏ trống số kWh tiêu thụ", async ({ page }) => {
        await page.click("#calculate-button");
        const calculationMessage = page.locator("#calculation-message");
        await expect(calculationMessage).toHaveText("Vui lòng nhập số kWh tiêu thụ");
    });