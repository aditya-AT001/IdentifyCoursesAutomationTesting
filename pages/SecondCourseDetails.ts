import { BrowserContext, Locator, Page } from "@playwright/test";
 
export class SecondCourse{
    private page:Page;
    private courses:Locator;
    private secondCourseName!:Locator;
    private secondCourseRating!:Locator;
    private SecondCourseDuration!:Locator;
 
    constructor(page:Page){
        this.page=page;
        this.courses=page.locator(".cds-CommonCard-title.css-6ecy9b")
    }
    private newTabLocators(newTab:Page){
        this.secondCourseName=newTab.locator("span.css-wo322s");
        this.secondCourseRating=newTab.locator('span[aria-hidden="true"]').nth(1);
        this.SecondCourseDuration=newTab.locator('//span/span[contains(text(),"hours")]');
    }
    async secondCourse(context:BrowserContext){
        const [newTab]=await Promise.all([
            context.waitForEvent('page'),
            this.courses.nth(1).click()
        ])
        await newTab.waitForLoadState('domcontentloaded');
        this.newTabLocators(newTab);
        const name=await this.secondCourseName.textContent();
        console.log("second course name ",name);
        const rating=await this.secondCourseRating.textContent();
        console.log("second course rating",rating);
 
        const duration=await this.SecondCourseDuration.all();
       
        let totalHours=0;
        for(let el of duration){
            const text=await el.textContent();
            const hours=text?.split(' ')[0];
            totalHours+=Number(hours);
        }
        console.log("Duration of second course ",totalHours);
    }
}