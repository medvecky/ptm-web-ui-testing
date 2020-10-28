import {by, element, ElementFinder, promise} from "protractor";
import {waitForElement} from "../steps/CommonFunctions";

export class CreateTaskPage {
    private createTaskButton: ElementFinder;

    constructor() {
        this.createTaskButton = element(by.cssContainingText('button','Create task'));
    }

    isCreateTaskButtonPresent(): promise.Promise<boolean> {
        return this.createTaskButton.isPresent();
    }

    waitForCreateTaskButton() {
        return waitForElement(this.createTaskButton);
    }
}