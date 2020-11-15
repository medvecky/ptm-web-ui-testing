import {by, element, ElementFinder, promise} from "protractor";

export class ChangeTaskStatusComponent {

    private taskTitle: ElementFinder;
    private taskDescription: ElementFinder;
    private statusSelectField: ElementFinder;

    constructor() {
        this.taskTitle = element(by.css('form:nth-child(1) > div.form-group:nth-child(1)'))
        this.taskDescription = element(by.css('form:nth-child(1) > div.form-group:nth-child(2)'));
        this.statusSelectField = element(by.css('option:nth-child(1)'));
    }

    isTaskTitlePresent(): promise.Promise<boolean> {
        return this.taskTitle.isPresent();
    }

    isTaskDescriptionPresent(): promise.Promise<boolean> {
        return this.taskDescription.isPresent();
    }

    getTitleText(): promise.Promise<string> {
        return this.taskTitle.getText();
    }

    getDescriptionText(): promise.Promise<string> {
        return this.taskDescription.getText();
    }

    isSelectOptionPresent(): promise.Promise<boolean> {
        return this.statusSelectField.isPresent();
    }

    getSelectOptionText(): promise.Promise<string> {
        return this.statusSelectField.getText();
    }

    setStatus(status: string): promise.Promise<void> {
        return element(by.cssContainingText('option', status)).click();
    }
 }