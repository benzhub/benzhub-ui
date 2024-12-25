import { test, expect } from '@playwright/test';

test('input basic functionality', async ({ page }) => {
  await page.goto('/iframe.html?id=components-input--default');
  const input = page.locator('input');
  await expect(input).toBeVisible();
  await input.type('Hello World');
  await expect(input).toHaveValue('Hello World');
});

test('input disabled state', async ({ page }) => {
  await page.goto('/iframe.html?id=components-input--disabled');
  const input = page.locator('input');
  await expect(input).toBeDisabled();
  await expect(input).toHaveClass(/bg-gray-100/);
});

test('input error state', async ({ page }) => {
  await page.goto('/iframe.html?id=components-input--with-error');
  const input = page.locator('input');
  await expect(input).toHaveClass(/border-red-500/);
  const errorMessage = page.locator('.text-red-500');
  await expect(errorMessage).toBeVisible();
}); 