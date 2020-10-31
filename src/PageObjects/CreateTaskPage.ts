import {by, element, ElementFinder, promise} from "protractor";
import {waitForElement} from "../steps/CommonFunctions";

export class CreateTaskPage {
    private createTaskButton: ElementFinder;
    private titleLabel : ElementFinder;
    private titleInputField : ElementFinder;
    private descriptionLabel : ElementFinder;
    private descriptionInputFiled : ElementFinder;
    private projectLabel : ElementFinder;
    private projectSelectField: ElementFinder;

    constructor() {
        this.createTaskButton = element(by.cssContainingText('button','Create task'));
        this.titleLabel = element(by.css('label[for="formTitle"]'));
        this.titleInputField = element(by.id('formTitle'));
        this.descriptionLabel = element(by.css('label[for="formDescription"]'));
        this.descriptionInputFiled = element(by.id('formDescription'));
        this.projectLabel = element(by.css('label[for="formProject"]'));
        this.projectSelectField = element(by.id('formProject'));
    }

    isCreateTaskButtonPresent(): promise.Promise<boolean> {
        return this.createTaskButton.isPresent();
    }

    waitForCreateTaskButton() {
        return waitForElement(this.createTaskButton);
    }

   isTitleLabelPresent(): promise.Promise<boolean> {
        return this.titleLabel.isPresent();
   }

   getTitleLabelText(): promise.Promise<string> {
        return this.titleLabel.getText();
   }

   isTitleInputFieldPresent(): promise.Promise<boolean> {
        return this.titleInputField.isPresent();
   }

   getTitleInputFieldPlaceholderText(): promise.Promise<string> {
        return this.titleInputField.getAttribute('placeholder');
   }

   isDescriptionLabelPresent(): promise.Promise<boolean> {
        return this.descriptionLabel.isPresent();
   }

   getDescriptionLabelText(): promise.Promise<string> {
        return this.descriptionLabel.getText();
   }

   isDescriptionInputFieldPresent(): promise.Promise<boolean> {
        return this.descriptionInputFiled.isPresent();
   }

   getDescriptionInputFieldPlaceholderText(): promise.Promise<string> {
        return this.descriptionInputFiled.getAttribute('placeholder');
   }

   isProjectLabelPresent(): promise.Promise<boolean> {
        return this.projectLabel.isPresent();
   }

   getProjectLabelText(): promise.Promise<string> {
        return this.projectLabel.getText();
   }

   isProjectSelectFieldPresent(): promise.Promise<boolean> {
        return this.projectSelectField.isPresent();
   }

   getProjectSelectCurrentValue(): promise.Promise<string> {
        return this.projectSelectField.getText();
   }

   getTitleRequiredAttribute(): promise.Promise<string> {
        return this.titleInputField.getAttribute('required');
   }

   getDescriptionRequiredAttribute(): promise.Promise<string> {
        return this.descriptionInputFiled.getAttribute('required');
   }
}