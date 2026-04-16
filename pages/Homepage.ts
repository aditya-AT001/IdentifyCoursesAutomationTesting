import{Locator, Page} from "@playwright/test";
class HomePage{
    private page:Page;
    private webSearch:Locator;
    private searchBtn:Locator;
    constructor(page:Page){
        this.page=page;
        this.webSearch=this.page.getByPlaceholder("What do you want to learn?");
        this.searchBtn=this.page.locator('button.cds-iconButton-primary');

    }
    async goTo(){
        await this.page.goto("https://www.coursera.org/");
    }
    async webCourse(){
        await this.webSearch.fill("web development");
        await this.searchBtn.click();
    }
}
export{
    HomePage
}