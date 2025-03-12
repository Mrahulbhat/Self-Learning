// import { test, expect } from '@playwright/test'

// test('Login Test', async({page})=>{
//   await page.goto('https://www.saucedemo.com');
//   await page.fill("#user-name","standard_user");
//   await page.fill("#password","secret_sauce");

//   await page.getByRole('button',{name:'Login'}).click();

//   await expect(page).toHaveURL(/inventory/);

//   await expect(page.getByRole('textbox',{name:"Products"})).toBeVisible;

// })
import {test,expect} from "@playwright/test"

test('Login Test with Screenshot', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // Capture screenshot
  await page.screenshot({ path: 'screenshot.png' });
});
