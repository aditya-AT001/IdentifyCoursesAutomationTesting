import{Locator, Page} from "@playwright/test";
class HomePage{
    private page:Page;
    private webSearch:Locator;
    private searchBtn:Locator;
    private exploreBtn:Locator;
    private learnlink:Locator;
    private enterpriseBtn:Locator;
    constructor(page:Page){
        this.page=page;
        this.webSearch=this.page.locator("#search-autocomplete-input");
        this.searchBtn=this.page.locator('button.cds-iconButton-primary');
        this.exploreBtn=this.page.locator('//button[@data-testid="megamenu-explore-button"]');
        this.learnlink=this.page.locator('//a[@data-track-href="/browse/language-learning"]');
        this.enterpriseBtn=this.page.locator('//a[@data-click-key="front_page.front_page_story.click.navigation_meta_nav_Business"]');


    }
    async goTo(){
        await this.page.goto("https://www.coursera.org/");
    }
    async webCourse(){
        await this.webSearch.fill("web development");
        await this.searchBtn.click();
    }
    async learning(){
        await this.exploreBtn.click();
        await this.exploreBtn.waitFor();
        await this.learnlink.click();
      
    }
    async formValid(){
        this.enterpriseBtn.click();

    }
}
export{
    HomePage
}