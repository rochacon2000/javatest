import { test, expect } from '@playwright/test';

// This sample simulates a larger test suite
for (var i = 0; i < 2; i++) {

	test(' test ' + i, async ({ page }) => {
		await page.goto('https://playwright.dev/');
		
		// Click the get started link.
		await page.getByRole('link', { name: 'Get started' }).click();
		
		// Expect the URL to contain intro.
		await expect(page).toHaveURL(/.*intro/);
	});
}