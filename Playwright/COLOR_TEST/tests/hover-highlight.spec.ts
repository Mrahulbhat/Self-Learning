import { test, expect } from '@playwright/test';

test.describe('Hover Highlight Directive', () => {
  test('should turn text green when hovered', async ({ page }) => {
    // Go to the page where the test will run
    await page.goto('http://localhost:63423/'); // Ensure this is your local app URL

    // Hover over the element that has the hover effect (in this case, the span with "Rahul")
    const rahulText = await page.locator('span:has-text("Rahul")');
    
    // Ensure that the default color is black (before hovering)
    const initialColor = await rahulText.evaluate(el => window.getComputedStyle(el).color);
    expect(initialColor).toBe('rgb(0, 0, 0)'); // Ensure it's black initially

    // Hover over the "Rahul" text
    await rahulText.hover();

    // Wait for a short period to ensure hover effect is applied
    await page.waitForTimeout(500);

    // Check if the color of the "Rahul" text turns green
    const colorAfterHover = await rahulText.evaluate(el => window.getComputedStyle(el).color);
    expect(colorAfterHover).toBe('rgb(0, 128, 0)'); // rgb(0, 128, 0) is green
  });

  test('should turn text red when mouse leaves', async ({ page }) => {
    // Go to the page where the test will run
    await page.goto('http://localhost:63423/'); // Ensure this is your local app URL

    // Locate the element and hover over it
    const rahulText = await page.locator('span:has-text("Rahul")');
    await rahulText.hover();

    // Wait for a short period to ensure hover effect is applied
    await page.waitForTimeout(500);

    // Move the mouse away from the element (simulate mouse leave)
    const boundingBox = await rahulText.boundingBox(); // Get the element's position
    await page.mouse.move(boundingBox!.x + boundingBox!.width + 10, boundingBox!.y); // Move mouse outside the element

    // Wait a bit to ensure mouseleave effect is applied
    await page.waitForTimeout(500);

    // Check if the color of the "Rahul" text turns red
    const colorAfterLeave = await rahulText.evaluate(el => window.getComputedStyle(el).color);
    expect(colorAfterLeave).toBe('rgb(255, 0, 0)'); // rgb(255, 0, 0) is red
  });
});
