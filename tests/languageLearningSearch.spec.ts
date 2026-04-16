import { test, expect } from '@playwright/test';
import { LanguageLearningPage } from '../pages/LanguageLearningPage';

test('List all available languages', async ({ page }) => {
  const languagePage = new LanguageLearningPage(page);

  await languagePage.navigate();
  await languagePage.expandLanguageFilter();

  await languagePage.logAllLanguages();
  const count = await languagePage.getLanguageCount();

  console.log('Total languages:', count);
});

test('Count languages in Beginner level', async ({ page }) => {
  const languagePage = new LanguageLearningPage(page);

  await languagePage.navigate();
  await languagePage.selectLevel('Beginner');
  await languagePage.expandLanguageFilter();

  const count = await languagePage.getLanguageCount();
  console.log('Number of languages in Beginner level:', count);

  await languagePage.collapseLanguageFilter();
  await languagePage.selectLevel('Beginner');
});

test('Count languages in Intermediate level', async ({ page }) => {
  const languagePage = new LanguageLearningPage(page);

  await languagePage.navigate();
  await languagePage.selectLevel('Intermediate');
  await languagePage.expandLanguageFilter();

  const count = await languagePage.getLanguageCount();
  console.log('Number of languages in Intermediate level:', count);

  await languagePage.collapseLanguageFilter();
  await languagePage.selectLevel('Intermediate');
});

test('Count languages in Advanced level', async ({ page }) => {
  const languagePage = new LanguageLearningPage(page);

  await languagePage.navigate();
  await languagePage.selectLevel('Advanced');
  await languagePage.expandLanguageFilter();

  const count = await languagePage.getLanguageCount();
  console.log('Number of languages in Advanced level:', count);

  await languagePage.collapseLanguageFilter();
  await languagePage.selectLevel('Advanced');
});

test('Count languages in Mixed level', async ({ page }) => {
  const languagePage = new LanguageLearningPage(page);

  await languagePage.navigate();
  await languagePage.selectLevel('Mixed');
  await languagePage.expandLanguageFilter();

  const count = await languagePage.getLanguageCount();
  console.log('Number of languages in Mixed level:', count);

  await languagePage.collapseLanguageFilter();
  await languagePage.selectLevel('Mixed');
});