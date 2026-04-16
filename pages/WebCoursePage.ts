import { Locator, Page,BrowserContext } from "@playwright/test";

class CourseList{
    private page:Page;
    private lanfilter:Locator;
    private levelFilter:Locator;
    private selectEng:Locator;
    private selectBegin:Locator;
    private viewBtn:Locator;
    private courses:Locator;
    private firstCourseTitle:Locator;
    private firstRating:Locator;



    constructor(page:Page){
        this.page=page;
        this.lanfilter=this.page.locator("//div[text()='Language']");
        this.selectEng=this.page.locator('//span[text()="English"]');
        this.levelFilter=this.page.locator('//div[text()="Level"]');
        this.selectBegin=this.page.locator("//span[text()='Beginner']");
        this.viewBtn=this.page.locator('button[data-testid="filter-view-button"]');
        this.courses=this.page.locator(".cds-CommonCard-title.css-6ecy9b");
        this.firstCourseTitle=this.page.locator("span.css-wo322s");
        this.firstRating=this.page.locator('span[aria-hidden="true"]',{hasText:'4.4'});
    }
    async filterLanandLevel(){
        await this.lanfilter.click();
        await this.selectEng.click();
        await this.viewBtn.click();
        await this.levelFilter.click();
        await this.selectBegin.click();
        await this.viewBtn.click();
    }
}
export{
    CourseList
}
