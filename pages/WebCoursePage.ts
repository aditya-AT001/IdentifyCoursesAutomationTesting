import { Locator, Page,BrowserContext } from "@playwright/test";
 
export class CourseList{
    private page:Page;
    private lanfilter:Locator;
    private levelFilter:Locator;
    private selectEng:Locator;
    private selectBegin:Locator;
    private viewBtn:Locator;
   
    constructor(page:Page){
        this.page=page;
        this.lanfilter=this.page.locator("//div[text()='Language']");
        this.selectEng=this.page.locator('//span[text()="English"]');
        this.levelFilter=this.page.locator('//div[text()="Level"]');
        this.selectBegin=this.page.locator("//span[text()='Beginner']");
        this.viewBtn=this.page.locator('button[data-testid="filter-view-button"]');
       
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