import {$$, browser, by, element, protractor} from "protractor";

describe('Sign In page', () => {
    beforeAll(async () => {
        browser.waitForAngularEnabled(false);
       await browser.get('http://localhost');
    });

    it('should present Sign In button',  async () => {
        await expect(element(by.css('button[type="submit"]')).getText()).toEqual('Sign In');
    });

    it('should present Email label', async () => {
        await expect(element(by.css('label[for="formEmail"]')).getText()).toEqual('Email');
    });

    it('should present Email field', async () => {
        await expect(element(by.css('input[placeholder="Enter email"]')).isPresent()).toBe(true);
    });

    it('should present Password label', async () => {
        await expect(element(by.css('label[for="formPassword"]')).getText()).toEqual('Password');
    });

    it('should present Password field', async () => {
        await expect(element(by.css('input[placeholder="password"]')).isPresent()).toBe(true);
    });

    it('should login as entered correct credentials',  async () => {
       await element(by.css('input[placeholder="Enter email"]')).sendKeys('testuser1@gmail.com');
        await element(by.css('input[placeholder="password"]')).sendKeys('Password_12345');
        await element(by.css('button[type="submit"]')).click();
        const EC = protractor.ExpectedConditions;
        let openLabel = await $$('span[class="badge badge-info"]').first();
        EC.presenceOf(openLabel);
        await browser.wait(EC.presenceOf(openLabel), 10000,'Element taking too long to appear in the DOM');
        await expect(openLabel.getText()).toEqual('OPEN');
    })
});