import { test, expect } from '@playwright/test';

test("coursera login",async({page})=>{
  await page.goto("https://www.coursera.org/");
  //await page.pause();
})