import { test, expect } from '@playwright/test';

test('button component should work correctly', async ({ page }) => {
  // 訪問 Button 的 Story
  await page.goto('/iframe.html?id=components-button--default');
  
  // 基本功能測試
  const button = page.getByRole('button', { name: 'Click Me' });
  await expect(button).toBeVisible();
  
  // 點擊測試
  await button.click();
  
  // Loading 狀態測試
  const loadingButton = page.getByTestId('loading-spinner');
  await expect(loadingButton).toBeVisible();
}); 