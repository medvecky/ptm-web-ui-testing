import {$$, browser, by, element, protractor} from "protractor";

describe('Sign In page', function() {
    beforeAll(() => {
        browser.waitForAngularEnabled(false);
        browser.get('http://localhost');
    });

    it('should present Sign In button', function() {
        expect(element(by.css('button[type="submit"]')).getText()).toEqual('Sign In');
    });

    it('should present Email label', function() {
        expect(element(by.css('label[for="formEmail"]')).getText()).toEqual('Email');
    });

    it('should present Email field', function() {
        expect(element(by.css('input[placeholder="Enter email"]')).isPresent()).toBe(true);
    });

    it('should present Password label', function() {
        expect(element(by.css('label[for="formPassword"]')).getText()).toEqual('Password');
    });

    it('should present Password field', function() {
        expect(element(by.css('input[placeholder="password"]')).isPresent()).toBe(true);
    });

    it('should login as entered correct credentials', function () {
        element(by.css('input[placeholder="Enter email"]')).sendKeys('testuser1@gmail.com');
        element(by.css('input[placeholder="password"]')).sendKeys('Password_12345');
        element(by.css('button[type="submit"]')).click();
        const EC = protractor.ExpectedConditions;
        let openLabel = $$('span[class="badge badge-info"]').first();
        EC.presenceOf(openLabel);
        browser.wait(EC.presenceOf(openLabel), 10000,'Element taking too long to appear in the DOM');
        expect(openLabel.getText()).toEqual('OPEN');
    })
});