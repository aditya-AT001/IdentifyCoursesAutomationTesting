import {Page,expect,Locator} from '@playwright/test';

export class EnterpriseFormPage
{
    private page: Page;
    private firstName:Locator;
    private lastName:Locator;
    private email:Locator;
    private mobileNo:Locator;
    private orgType:Locator;
    private jobTitle:Locator;
    private companyName:Locator;
    private companySize:Locator;
    private need:Locator;
    private country:Locator;
    private state:Locator;
    private errorMsg:Locator;
    private submit:Locator;
    

    constructor(page: Page) {
        this.page = page;
        this.firstName=page.locator("#FirstName");
        this.lastName=page.locator("#LastName");
        this.email=page.locator("#Email");
        this.mobileNo=page.locator("#Phone");
        this.orgType=page.locator('//select[@id="rentalField9"]');
        this.jobTitle=page.locator("#Title");
        this.companyName=page.locator("#Company");
        this.companySize=page.locator('//select[@id="Employee_Range__c"]');
        this.need=page.locator('//select[@id="Self_Reported_Needs__c"]');
        this.country=page.locator('//select[@id="Country"]');
        this.state=page.locator('//select[@id="State"]');
        this.errorMsg=page.locator("#ValidMsgEmail");
        this.submit=page.locator('//button[text()="Submit"]');
    }
    
    async formFillUp()
    {
        await this.enterFirstName();
        await this.enterLastName();
        await this.enterEmail();
        await this.enterMobileNo();
        await this.selectOrgType();
        await this.enterJobTitle();
        await this.enterCompanyName();
        await this.selectCompanySize();
        await this.describeYourNeed();
        await this.selectCountry();
        await this.selectState();
    }
    
    async enterFirstName()
    {
        await this.firstName.waitFor();
        await this.firstName.fill("Himanshu");
    }

    async enterLastName()
    {
        await this.lastName.fill("Kumar");
    }

    async enterEmail()
    {
        await this.email.fill("abcde");
    }

    async enterMobileNo()
    {
        await this.mobileNo.fill("7484815884");
    }

    async selectOrgType()
    {
        await this.orgType.click();
        await this.orgType.selectOption("Business");
    }

    async enterJobTitle()
    {
        await this.jobTitle.fill("Quality Engineer");
    }

    async enterCompanyName()
    {
        await this.companyName.fill("Cognizant");
    }

    async selectCompanySize()
    {
        await this.companySize.click();
        await this.companySize.selectOption("30001+");
    }

    async describeYourNeed()
    {
        await this.need.click();
        await this.need.selectOption("Courses for myself");
    }

    async selectCountry()
    {
        await this.country.click();
        await this.country.selectOption("India");
    }

    async selectState()
    {
        await this.state.click();
        await this.state.selectOption("Bihar");
    }

    async clickSubmitButton()
    {
        await this.submit.click();
    }

    async validateErrorMsg()
    {
        const msg=await this.errorMsg.innerText();
        console.log(msg);
    }

}