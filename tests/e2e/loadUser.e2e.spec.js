import {test, expect} from '@playwright/test'

test('TC-E2E-01: Nhap URL va hien thi danh sach UL LI', async ({page}) => {
    await page.goto('/danh-sach-users.html');
    await page.locator('#api-url').fill('https://jsonplaceholder.typicode.com/users');
    await page.click('fetch-button');
    await expect(page.locator('#result ul')).toBeVisible();
    await expect(page.locator('#result li')).toHaveCount(10);
});

test('TC-E2E-02: Kiem tra du lieu dung', async ({page}) => {
    await page.goto('/danh-sach-users.html');
    await page.locator('#api-url').fill('https://jsonplaceholder.typicode.com/users');
    await page.click('fetch-button');
    const result = page.locator('result');
    await expect(result).toContainText('Ervin Howell');
    await expect(result).toContainText('Clementine Bauch');
    await expect(result).toContainText('Glenna Reichert');
});