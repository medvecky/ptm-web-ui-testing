import {by, element, ElementFinder, promise} from "protractor";
import {waitForElement} from "../steps/CommonFunctions";

export class EditTaskComponent {
    private titleCssSelector: string;
    private titleLabel: ElementFinder;
    private titleInputField: ElementFinder;
    private descriptionLabel : ElementFinder;
    private descriptionInputFiled : ElementFinder;
    private statusLabel: ElementFinder;
    private projectLabel: ElementFinder;
    private saveChangesButton: ElementFinder;

    constructor() {
        this.titleCssSelector = 'label[for="formTitle"]';
        this.titleLabel = element(by.css(this.titleCssSelector));
        this.titleInputField = element(by.id('formTitle'));
        this.descriptionLabel = element(by.css('label[for="formDescription"]'));
        this.descriptionInputFiled = element(by.id('formDescription'));
        this.statusLabel = element(by.css('label[for="formStatus"]'));
        this.projectLabel = element(by.css('label[for="formStatus"]'));
        this. saveChangesButton = element(by.cssContainingText('button', 'Save changes'));
    }

    isSaveChangesButtonPresent(): promise.Promise<boolean> {
        return this.saveChangesButton.isPresent();
    }

    waitForSaveChangesButton() {
        return waitForElement(this.saveChangesButton);
    }

    getTitleInputFieldText(): promise.Promise<string> {
        return this.titleInputField.getAttribute('value');
    }

    getDescriptionInputFieldText(): promise.Promise<string> {
        return this.descriptionInputFiled.getAttribute('value');
    }

    isStatusLabelPresent(): promise.Promise<boolean> {
        return this.statusLabel.isPresent();
    }

    getStatusLabelText(): promise.Promise<string> {
        return this.statusLabel.getText();
    }

    async setTitle(title: string): Promise<void> {
        await this.titleInputField.clear();
        return this.titleInputField.sendKeys(title);
    }

    async setDescription(description: string): Promise<void> {
        await this.descriptionInputFiled.clear();
        return this.descriptionInputFiled.sendKeys(description);
    }

    clickOnSaveChangesButton(): promise.Promise<void> {
        return this.saveChangesButton.click();
    }
 }