import {test,expect} from '@playwright/test'
import { EnterpriseFormPage } from '../pages/EnterpriseFormPage'

test("validating error msg",async({page})=>{
    const enterpriseFormPage=new EnterpriseFormPage(page);

    await enterpriseFormPage.goto();
    await page.waitForLoadState();
    
    await enterpriseFormPage.formFillUp();

    await enterpriseFormPage.clickSubmitButton();

    await enterpriseFormPage.validateErrorMsg();
})