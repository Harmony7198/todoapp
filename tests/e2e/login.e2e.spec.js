import {test, expect} from "@playwright/test";
// MÔ TẢ TEST PLAN
test.describe("kiểm thử chức năng đăng nhập", () => {
    // Mở trang chủ cho tất cả test case
    test.beforeEach(async ({ page }) => {
        //mở trang chủ
        await page.goto("/");
    });
    
    //TEST CASE 1: chưa nhập gì cả, vùng thông báo phải hiện chữ "Email khong hop le"
    test("TC-LOGIN-001 Hiển thị thông báo lỗi khi bỏ trống Email", async ({ page }) => {
        // Thao tác click vào nút có id "login-button"
        await page.click("#login-button");
        // Lấy phần tử vùng thông báo id#login-message
        const loginMessage = page.locator("#login-message");
       // Mong đợi kq trong vùng thông báo phải có chữ "Email khong hop le"
        await expect(loginMessage).toHaveText("Email khong hop le");
    });
    //TEST CASE 2: có nhập email quên nhập mật khẩu
    test("TC-LOGIN-002 Hiển thị thông báo lỗi khi bỏ trống mật khẩu", async ({ page }) => {
        await page.fill("#email-input", "admin@gmail.com");
        await page.click("#login-button");
        const loginMessage = page.locator("#login-message");
        await expect(loginMessage).toHaveText("Mat khau khong hop le");
    });
    // Test case 3: có nhập email nhưng nhập sai mật khẩu
    test("TC-LOGIN-003 Hiển thị thông báo lỗi khi nhập sai mật khẩu", async ({ page }) => {
        await page.fill("#email-input", "admin@gmail.com");
        await page.fill("#password-input", "wrongpassword");
        await page.click("#login-button");
        const loginMessage = page.locator("#login-message");
        await expect(loginMessage).toHaveText("Đăng nhập thất bại");
    });
    // Mở trang chủ cho tất cả test case   test.beforeEach(async ({ page }) => {    //mở trang chủ    await page.goto("/");  });
    test("TC-LOGIN-004 Hiển thị thông báo thành công khi nhập đúng email và mật khẩu", async ({ page }) => {
        await page.fill("#email-input", "admin@gmail.com");
        await page.fill("#password-input", "123456");
        await page.click("#login-button");
        const loginMessage = page.locator("#login-message");
        await expect(loginMessage).toHaveText("Đăng nhập thành công");
    });
});