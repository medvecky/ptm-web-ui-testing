import {browser, ElementFinder, protractor} from "protractor";

export function waitForElement(element: ElementFinder ){
    const EC = protractor.ExpectedConditions;
    return  browser.wait(
        EC.visibilityOf(element), 10000,'Element taking too long to appear in the DOM');
}

