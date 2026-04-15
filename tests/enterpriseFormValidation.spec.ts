import {test,expect} from '@playwright/test'
import { EnterpriseFormPage } from '../pages/EnterpriseFormPage'

test("validating error msg",async({page})=>{
    const enterpriseFormPage=new EnterpriseFormPage(page);

    await enterpriseFormPage.goto();
    await page.waitForLoadState();
    await enterpriseFormPage.enterFirstName();
    await enterpriseFormPage.enterLastName();
    await enterpriseFormPage.enterEmail();
    await enterpriseFormPage.enterMobileNo();
    await enterpriseFormPage.selectOrgType();
    await enterpriseFormPage.enterJobTitle();
    await enterpriseFormPage.enterCompanyName();
    await enterpriseFormPage.selectCompanySize();
    await enterpriseFormPage.describeYourNeed();
    await enterpriseFormPage.selectCountry();
    await enterpriseFormPage.selectState();
    await enterpriseFormPage.clickSubmitButton();

    await enterpriseFormPage.validateErrorMsg();
})