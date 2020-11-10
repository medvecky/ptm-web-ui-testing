import {by, element, ElementFinder, promise} from "protractor";

export class EditTaskProjectComponent {

    private titleLabel: ElementFinder;
    private titleInputField: ElementFinder;
    private descriptionLabel : ElementFinder;
    private descriptionInputFiled : ElementFinder;
    private statusLabel: ElementFinder;
    private projectSelectField: ElementFinder;
    private saveChangesButton: ElementFinder;

    constructor() {
        this.titleLabel = element(by.css('label[for="formTitle"]'));
        this.titleInputField = element(by.id('formTitle'));
        this.descriptionLabel = element(by.css('label[for="formDescription"]'));
        this.descriptionInputFiled = element(by.id('formDescription'));
        this.statusLabel = element(by.css('label[for="formStatus"]'));
        this.projectSelectField = element(by.css('option:nth-child(1)'));
        this. saveChangesButton = element(by.cssContainingText('button', 'Save changes'))
    }

    isTaskStatusLabelPresent(): promise.Promise<boolean> {
        return this.statusLabel.isPresent();
    }

    getTaskStatusText(): promise.Promise<string> {
        return this.statusLabel.getText();
    }

    setProject(projectName: string): promise.Promise<void> {
        return element(by.cssContainingText('option', projectName)).click();
    }

}