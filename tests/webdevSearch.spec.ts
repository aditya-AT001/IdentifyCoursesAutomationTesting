import {test,BrowserContext} from "@playwright/test";
import { HomePage } from "../pages/Homepage";
import { CourseList } from "../pages/WebCoursePage";
import { FirstCourse } from "../pages/FirstCourseDetails";
import { SecondCourse } from "../pages/SecondCourseDetails";
import { LanguageLearningPage } from '../pages/LanguageLearningPage';
import { EnterpriseFormPage } from '../pages/EnterpriseFormPage';

test("webCourse Search",async({page,context})=>{
    const homePage=new HomePage(page);
   await  homePage.goTo();
   await  homePage.webCourse();
   const courseList=new CourseList(page);
   await courseList.filterLanandLevel();

   const firstCourse=new FirstCourse(page);
   await firstCourse.courseOne(context);

   const secondCourse=new SecondCourse(page);
   await secondCourse.secondCourse(context);
})

test('List all available languages', async ({ page }) => {
  const languagePage = new LanguageLearningPage(page);
  const homePage=new HomePage(page);
  await homePage.goTo();
  await homePage.learning();


  await languagePage.expandLanguageFilter();

  await languagePage.logAllLanguages();
  const count = await languagePage.getLanguageCount();

  console.log('Total languages:', count);
});

test('Count languages in Beginner level', async ({ page }) => {
  const languagePage = new LanguageLearningPage(page);
  const homePage=new HomePage(page);
  await homePage.goTo();
  await homePage.learning();

 
  await languagePage.selectLevel('Beginner');
  await languagePage.expandLanguageFilter();

  const count = await languagePage.getLanguageCount();
  console.log('Number of languages in Beginner level:', count);

  await languagePage.collapseLanguageFilter();
  await languagePage.selectLevel('Beginner');
});

test('Count languages in Intermediate level', async ({ page }) => {
  const languagePage = new LanguageLearningPage(page);
  const homePage=new HomePage(page);
  await homePage.goTo();
  await homePage.learning();

 
  await languagePage.selectLevel('Intermediate');
  await languagePage.expandLanguageFilter();

  const count = await languagePage.getLanguageCount();
  console.log('Number of languages in Intermediate level:', count);

  await languagePage.collapseLanguageFilter();
  await languagePage.selectLevel('Intermediate');
});

test('Count languages in Advanced level', async ({ page }) => {
  const languagePage = new LanguageLearningPage(page);
  const homePage=new HomePage(page);
  await homePage.goTo();
  await homePage.learning();

  
  await languagePage.selectLevel('Advanced');
  await languagePage.expandLanguageFilter();

  const count = await languagePage.getLanguageCount();
  console.log('Number of languages in Advanced level:', count);

  await languagePage.collapseLanguageFilter();
  await languagePage.selectLevel('Advanced');
});

test('Count languages in Mixed level', async ({ page }) => {
  const languagePage = new LanguageLearningPage(page);
  const homePage=new HomePage(page);
  await homePage.goTo();
  await homePage.learning();

 
  await languagePage.selectLevel('Mixed');
  await languagePage.expandLanguageFilter();

  const count = await languagePage.getLanguageCount();
  console.log('Number of languages in Mixed level:', count);

  await languagePage.collapseLanguageFilter();
  await languagePage.selectLevel('Mixed');
});




test("validating error msg",async({page})=>{
    const enterpriseFormPage=new EnterpriseFormPage(page);

   
   const homePage=new HomePage(page);
  await homePage.goTo();
  await homePage.formValid();
  
    await page.waitForLoadState('networkidle');
    
    await enterpriseFormPage.formFillUp();

    await enterpriseFormPage.clickSubmitButton();

    await enterpriseFormPage.validateErrorMsg();
})