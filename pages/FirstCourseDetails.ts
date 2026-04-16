import { Locator, Page, BrowserContext } from "@playwright/test";
 
export class FirstCourse{
    private page:Page;
    private courses:Locator;
    private firstCourseName!:Locator;
    private firstCourseRating!:Locator;
    private firstCourseDuration!:Locator;
    constructor(page:Page){
      this.page=page;
      this.courses=this.page.locator(".cds-CommonCard-title.css-6ecy9b");
    }
  private newTabLocators(newTab:Page){
   this.firstCourseName=newTab.locator("span.css-wo322s");
   this.firstCourseRating=newTab.locator('span[aria-hidden="true"]').nth(5);
   this.firstCourseDuration=newTab.locator('//span[contains(text(),"hours")]');
 
  }
 
  async courseOne(context:BrowserContext){
    const [newTab]=await Promise.all([
        context.waitForEvent('page'),
        this.courses.nth(0).click()
    ])
    await newTab.waitForLoadState('domcontentloaded');
   
    this.newTabLocators(newTab);
    const name   = await this.firstCourseName.textContent();
        const rating = await this.firstCourseRating.textContent();
        console.log("First Course Name",   name);
        console.log("First Course Rating", rating);
 const duration=await this.firstCourseDuration.all();
   
    let totalHours = 0;
 
    for (const el of duration) {
        const text = await el.innerText();  
        const hours = text.split(' ')[0];  
        totalHours += Number(hours);        
    }
    console.log("First Course Duration", totalHours);
    await newTab.close();
 
  }  
}