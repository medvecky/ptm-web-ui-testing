import {browser, by, element, ElementFinder, promise, protractor} from "protractor";

export class homePage {
    private clearFilterButton:ElementFinder;

    constructor() {
        this.clearFilterButton = element(by.cssContainingText('button','Clear Filter'));
    }

   isClearFilterButtonPresent(): promise.Promise<boolean> {
        return this.clearFilterButton.isPresent();
    }

    waitForElement(element: ElementFinder ) {
        const EC = protractor.ExpectedConditions;
        browser.wait(EC.presenceOf(element), 10000,'Element taking too long to appear in the DOM');
    }
}