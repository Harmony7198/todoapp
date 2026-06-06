# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: loadUser.e2e.spec.js >> TC-E2E-01: Nhap URL va hien thi danh sach UL LI
- Location: tests\e2e\loadUser.e2e.spec.js:3:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#api-url')

```

# Test source

```ts
  1  | import {test, expect} from '@playwright/test'
  2  | 
  3  | test('TC-E2E-01: Nhap URL va hien thi danh sach UL LI', async ({page}) => {
  4  |     await page.goto('/danh-sach-users.html');
> 5  |     await page.locator('#api-url').fill('https://jsonplaceholder.typicode.com/users');
     |                                    ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  6  |     await page.click('fetch-button');
  7  |     await expect(page.locator('#result ul')).toBeVisible();
  8  |     await expect(page.locator('#result li')).toHaveCount(10);
  9  | });
  10 | 
  11 | test('TC-E2E-02: Kiem tra du lieu dung', async ({page}) => {
  12 |     await page.goto('/danh-sach-users.html');
  13 |     await page.locator('#api-url').fill('https://jsonplaceholder.typicode.com/users');
  14 |     await page.click('fetch-button');
  15 |     const result = page.locator('result');
  16 |     await expect(result).toContainText('Ervin Howell');
  17 |     await expect(result).toContainText('Clementine Bauch');
  18 |     await expect(result).toContainText('Glenna Reichert');
  19 | });
```