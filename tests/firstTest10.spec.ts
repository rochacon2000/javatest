import { test, expect } from '@playwright/test';

test(' test 10', async ({ page }) => {
		await page.goto('https://playwright.dev/');
		
		// Click the get started link.
		await page.getByRole('link', { name: 'Get started' }).click();
		
		// Expect the URL to contain intro.
		await expect(page).toHaveURL(/.*intro/);
	});