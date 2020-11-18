import {by, element, ElementArrayFinder, ElementFinder, promise} from "protractor";
import {waitForElement} from "../steps/CommonFunctions";

export class HomePage {
    private clearFilterButton: ElementFinder;
    private tasksTitles: ElementArrayFinder;
    private tasksWithoutProjectButton: ElementFinder;

    constructor() {
        this.clearFilterButton = element(by.cssContainingText('button', 'Clear Filter'));
        this.tasksWithoutProjectButton =
            element(by.cssContainingText('button', 'Tasks without project'));
        this.tasksTitles = element.all(by.css('a[class="card-title"]'));
    }

    isClearFilterButtonPresent(): promise.Promise<boolean> {
        return this.clearFilterButton.isPresent();
    }

    waitForClearFilterButton() {
        return waitForElement(this.clearFilterButton);
    }

    getNumberOfTasks(): promise.Promise<number> {
        return this.tasksTitles.count();
    }

    getNthTaskTitleText(taskNumber): promise.Promise<string> {
        return this.tasksTitles.get(taskNumber - 1).getText();
    }

    clickOnTaskWithoutProjectButton(): promise.Promise<void> {
        return this.tasksWithoutProjectButton.click();
    }

    clickOnClearFilterButton(): promise.Promise<void> {
        return this.clearFilterButton.click();
    }
}