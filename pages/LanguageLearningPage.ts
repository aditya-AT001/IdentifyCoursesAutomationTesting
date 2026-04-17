import { Page, Locator } from '@playwright/test';

export class LanguageLearningPage {
  readonly page: Page;
  readonly expandLanguageBtn: Locator;
  readonly collapseLanguageBtn: Locator;
  readonly languageItems: Locator;
 
  constructor(page: Page) {
    this.page = page;
    this.expandLanguageBtn = page.locator(
      '//button[@data-track-component="expand_filter_items_button_language"]'
    );
    this.collapseLanguageBtn = page.locator(
      '//button[@data-track-component="collapse_filter_items_button_language"]'
    );
    this.languageItems = page.locator('//div[contains(@data-testid,"language")]');
  }

  async navigate() {
    await this.page.goto('https://www.coursera.org/browse/language-learning');
  }

  levelCheckbox(level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Mixed') {
    return this.page.locator(`//div[contains(@data-testid,'${level}')]`);
  }

  async selectLevel(level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Mixed') {
    const checkbox = this.levelCheckbox(level);
    await checkbox.waitFor();
    await checkbox.click();
  }

  async expandLanguageFilter() {
    await this.expandLanguageBtn.click();
    await this.languageItems.first().waitFor();
  }

  async collapseLanguageFilter() {
    await this.collapseLanguageBtn.click();
  }

  async getLanguageCount(): Promise<number> {
    return await this.languageItems.count();
  }

  async logAllLanguages() {
    const items = await this.languageItems.all();
    for (const el of items) {
      console.log(await el.innerText());
    }
  }
}