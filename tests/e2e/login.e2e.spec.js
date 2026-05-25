import {test, expect} from "@playwright/test";
// MÔ TẢ TEST PLAN
test.describe("kiểm thử chức năng đăng nhập E2E", () => {
    //TEST CASE 1: Kiểm tra hiển thị thông báo lỗi khi bỏ trống Email
    test("Hiển thị thông báo lỗi khi bỏ trống Email", async ({ page }) => {
        // Mở trang đăng nhập
        await page.fill("#password-input", "123456");
        await page.click("#login-button");

        const loginMessage = page.locator("#login-message")
        await expect(loginMessage).toHaveText("Email khong hop le");
    });});