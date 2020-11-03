import { by, element, ElementFinder, promise} from "protractor";
import {waitForElement} from "../steps/CommonFunctions";

export class HomePage {
    private clearFilterButton:ElementFinder;

    constructor() {
        this.clearFilterButton = element(by.cssContainingText('button','Clear Filter'));
    }

   isClearFilterButtonPresent(): promise.Promise<boolean> {
        return this.clearFilterButton.isPresent();
    }

    waitForClearFilterButton() {
        return waitForElement(this.clearFilterButton);
    }
}