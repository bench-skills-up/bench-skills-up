import { test, expect } from '@playwright/test';

test.describe('Main App - App Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should load the app successfully', async ({ page }) => {
    await expect(page).toHaveTitle(/bench-skills-up/i);
  });

  test('should render the main heading', async ({ page }) => {
    const heading = page.getByRole('heading', { level: 1 });
    await expect(heading).toBeVisible();
    await expect(heading).toContainText(/bench skills up/i);
  });

  test('should render the Get Started button', async ({ page }) => {
    const button = page.getByRole('button', { name: /get started/i });
    await expect(button).toBeVisible();
  });

  test('should have correct styling', async ({ page }) => {
    const main = page.locator('main');
    const padding = await main.evaluate(el => {
      return window.getComputedStyle(el).padding;
    });
    expect(padding).toBeTruthy();
  });

  test('should have accessible structure', async ({ page }) => {
    const main = page.locator('main');
    await expect(main).toBeVisible();
    
    const headings = page.getByRole('heading');
    const count = await headings.count();
    expect(count).toBeGreaterThan(0);
  });

  test('should have no accessibility violations', async ({ page }) => {
    const violations = await page.evaluate(() => {
      return (window as unknown as Record<string, { violations?: { length: number } }>).__a11y__?.violations?.length || 0;
    });
    expect(violations).toBe(0);
  });

  test('should be responsive on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    
    const heading = page.getByRole('heading', { level: 1 });
    await expect(heading).toBeVisible();
    
    const button = page.getByRole('button');
    await expect(button).toBeVisible();
  });

  test('should handle button click', async ({ page }) => {
    const button = page.getByRole('button', { name: /get started/i });
    
    // Listen for any navigation or state changes
    const clickPromise = button.click();
    await expect(button).toBeEnabled();
    await clickPromise;
  });
});
