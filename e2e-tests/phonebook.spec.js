const { test, describe, expect, beforeEach } = require('@playwright/test')

describe('Phonebook', () => {
  beforeEach(async ({ page }) => {
    await page.goto('/')
  })
  test('front page can be opened', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Phonebook' })).toBeVisible()
  })
  test('person can be added', async ({ page }) => {
    await page.getByTestId('name').fill('John Doe')
    await page.getByTestId('number').fill('123456789')
    await page.getByText('Add Person').click()
    await expect(page.getByText('John Doe')).toBeVisible()
  })
})