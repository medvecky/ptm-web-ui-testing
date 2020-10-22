import {by, element, ElementFinder, promise} from "protractor";
import {waitForElement} from "../steps/CommonFunctions";

export class LoginPage {

    private signInButton: ElementFinder;
    private emailLabel: ElementFinder;
    private emailInputField: ElementFinder;
    private passwordLabel: ElementFinder;
    private passwordInputFiled: ElementFinder;
    private errorMessage: ElementFinder;


    constructor() {
        this.signInButton = element(by.css('button[type="submit"]'));
        this.emailLabel = element(by.css('label[for="formEmail"]'));
        this.emailInputField = element(by.id('formEmail'));
        this.passwordLabel = element(by.css('label[for="formPassword"]'));
        this.passwordInputFiled = element(by.id('formPassword'));
        this.errorMessage = element(by.css('div[class="card text-danger border-danger"] div[class="card-body"]'));
    }

    getSubmitButtonText(): promise.Promise<string> {
        return this.signInButton.getText();
    }

    isSignInButtonPresent(): promise.Promise<boolean> {
        return this.signInButton.isPresent();
    }

    isEmailLabelPresent(): promise.Promise<boolean> {
        return this.emailLabel.isPresent();
    }

    getEmailLabelText(): promise.Promise<string> {
        return this.emailLabel.getText();
    }

    isEmailInputFieldPresent(): promise.Promise<boolean> {
        return this.emailInputField.isPresent();
    }

    isPasswordLabelPresent(): promise.Promise<boolean> {
        return this.passwordLabel.isPresent();
    }

    getPasswordLabelText(): promise.Promise<string> {
        return this.passwordLabel.getText();
    }

    isPasswordInputFieldPresent(): promise.Promise<boolean> {
        return this.passwordInputFiled.isPresent();
    }

    async setEmailText(email:string) {
        await this.emailInputField.sendKeys(email);
    }

    async setPasswordText(password:string) {
        await this.passwordInputFiled.sendKeys(password);
    }

    async pressSubmitButton() {
       await this.signInButton.click();
    }

    async signIn(email: string, password:string) {
        await this.setEmailText(email);
        await this.setPasswordText(password);
        await this.pressSubmitButton();
    }

  getEmailRequiredAttribute(): promise.Promise<string> {
        return this.emailInputField.getAttribute('required');
    }

    getEmailTypeAttribute(): promise.Promise<string> {
        return this.emailInputField.getAttribute('type');
    }
    getPasswordRequiredAttribute(): promise.Promise<string> {
        return this.passwordInputFiled.getAttribute('required');
    }

    getPasswordTypeAttribute(): promise.Promise<string> {
        return this.passwordInputFiled.getAttribute('type');
    }

    waitForErrorMessage() {
        return waitForElement(this.errorMessage);
    }

    getErrorMessageText(): promise.Promise<string> {
        return this.errorMessage.getText();
    }

    isErrorMessagePresent(): promise.Promise<boolean> {
        return this.errorMessage.isPresent();
    }
}