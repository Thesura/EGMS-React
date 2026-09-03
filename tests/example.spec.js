// @ts-check
import { test, expect } from '@playwright/test';

test.describe('Landing Page',() => {

  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173/');
  })

  test('should have the correct metadata and elements', async ({ page }) => {
    // await page.goto('http://localhost:5173/');

    await expect(page).toHaveTitle('EGMS');

    await expect(page.getByRole('link', { name: 'Login' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Register' })).toBeVisible();
  })

  test('should navigate to login and register pages', async ({ page }) => {
    // await page.goto('http://localhost:5173/');

    await page.getByRole('link', { name: 'Login' }).click();
    await expect(page).toHaveURL('http://localhost:5173/login');

    await page.goBack();

    await page.getByRole('link', { name: 'Register' }).click();
    await expect(page).toHaveURL('http://localhost:5173/register');
  })
})

test.describe('Login Page',() => {

  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173/login');
  })

  test('should have the correct metadata and elements', async ({ page }) => {
    await expect(page).toHaveTitle('EGMS');

    await expect(page.getByPlaceholder('Username')).toBeVisible();
    await expect(page.getByPlaceholder('Password')).toBeVisible();
    await expect(page.getByRole('checkbox', { name: 'Staff Member' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Register' })).toBeVisible();

  })

  test('should navigate to register page', async ({ page }) => {
    await page.getByRole('link', { name: 'Register' }).click();
    await expect(page).toHaveURL('http://localhost:5173/register');
  })

  test('should display error message for invalid credentials', async ({ page }) => {
    await page.getByPlaceholder('Username').fill('invaliduser');
    await page.getByPlaceholder('Password').fill('invalidpassword');
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page.getByText('Incorrect Credentials')).toBeVisible();
  })

  test('should display error message for inactive account', async ({ page }) => {
    await page.getByPlaceholder('Username').fill('inactiveuser');
    await page.getByPlaceholder('Password').fill('password');
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page.getByText('Account is inactive')).toBeVisible();
  })

  test('should login successfully with valid credentials', async ({ page }) => {
    await page.getByPlaceholder('Username').fill('testuser');
    await page.getByPlaceholder('Password').fill('test');
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page).toHaveURL('http://localhost:5173/home');
  })
})
