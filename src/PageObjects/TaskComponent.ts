import {by, element, ElementFinder, promise} from "protractor";
import {waitForElement} from "../steps/CommonFunctions";

export class TaskComponent {
    private taskTitleCssSelector: string;
    private taskDescription: ElementFinder;
    private taskTitle: ElementFinder;
    private projectTitleCssSelector: string;
    private projectTitle: ElementFinder;
    private taskStatus: ElementFinder;
    private beginDate: ElementFinder;
    private endDate: ElementFinder;
    private changeStatusButton: ElementFinder;
    private deleteButton: ElementFinder;

    constructor() {
        this.taskTitleCssSelector = 'a[class="card-title"]';
        this.taskTitle = element(by.css(this.taskTitleCssSelector));
        this.taskDescription = element(by.css('div.card-body > p.card-text:nth-child(2)'));
        this.projectTitleCssSelector = 'div.card-body > a.card-text';
        this.projectTitle = element(by.css(this.projectTitleCssSelector));
        this.taskStatus = element(by.css('div.card-body > p.card-text:nth-child(4)'));
        this.changeStatusButton = element(by.cssContainingText('button', 'Change Status'));
        this.deleteButton = element(by.cssContainingText('button', 'Delete'));
        this.beginDate =  element((by.css('div.card-body > p.card-text:nth-child(5)')));
        this.endDate =  element((by.css('div.card-body > p.card-text:nth-child(6)')));
    }

    waitForCardTitleWithText(taskTitle: string) {
        return waitForElement(element(by.cssContainingText(this.taskTitleCssSelector,taskTitle)));
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
        return this.taskStatus.getText();
    }

    isChangeStatusButtonPresent(): promise.Promise<boolean> {
        return this.changeStatusButton.isPresent();
    }

    isDeleteButtonPresent(): promise.Promise<boolean> {
        return this.deleteButton.isPresent();
    }

    clickOnTaskTitle(taskTitle: string): promise.Promise<void> {
        return element(by.cssContainingText(this.taskTitleCssSelector, taskTitle)).click();
    }

    clickOnProjectWithTitle(projectTitle: string): promise.Promise<void> {
        return element(by.cssContainingText(this.projectTitleCssSelector, projectTitle)).click();
    }

    isBeginDatePresent(): promise.Promise<boolean> {
        return this.beginDate.isPresent();
    }

    isEndDatePresent(): promise.Promise<boolean> {
        return this.endDate.isPresent();
    }

    getBeginDateText(): promise.Promise<string> {
        return this.beginDate.getText();
    }

    getEndDateText(): promise.Promise<string> {
        return this.endDate.getText();
    }

    clickOnChangeStatusButton(): promise.Promise<void> {
        return this.changeStatusButton.click();
    }

    clickOnDeleteButton(): promise.Promise<void> {
        return this.deleteButton.click();
    }

    isTitlePresent(expectedTitle: string): promise.Promise<boolean> {
        return element(by.cssContainingText(this.taskTitleCssSelector, expectedTitle)).isPresent();
    }
 }
