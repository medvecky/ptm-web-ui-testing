import {by, element, ElementFinder, promise} from "protractor";
import {waitForElement} from "../steps/CommonFunctions";

export class TaskComponent {
    private taskTitleCssSelector: string;
    private taskDescription: ElementFinder;
    private taskTitle: ElementFinder;
    private projectTitle: ElementFinder;
    private projectStatus: ElementFinder;
    private changeStatusButton: ElementFinder;
    private deleteButton: ElementFinder;

    constructor() {
        this.taskTitleCssSelector = 'a[class="card-title"]';
        this.taskTitle = element(by.css(this.taskTitleCssSelector));
        this.taskDescription = element(by.css('div.card-body > p.card-text:nth-child(2)'));
        this.projectTitle = element(by.css('div.card-body > a.card-text'));
        this.projectStatus = element(by.css('div.card-body > p.card-text:nth-child(4)'));
        this.changeStatusButton = element(by.cssContainingText('button', 'Change Status'));
        this.deleteButton = element(by.cssContainingText('button', 'Delete'));
    }

    waitForCardTitleWithText(taskTitle: string) {
        return waitForElement(element(by.cssContainingText('a[class="card-title"]',taskTitle)));
    }

    getTitleText(): promise.Promise<string> {
        return this.taskTitle.getText();
    }

    getDescriptionText(): promise.Promise<string> {
        return this.taskDescription.getText();
    }

    getProjectTitleText(): promise.Promise<string> {
        return this.projectTitle.getText();
    }

    getTaskStatus(): promise.Promise<string> {
        return this.projectStatus.getText();
    }

    isChangeStatusButtonPresent(): promise.Promise<boolean> {
        return this.changeStatusButton.isPresent();
    }

    isDeleteButtonPresent(): promise.Promise<boolean> {
        return this.deleteButton.isPresent();
    }
}