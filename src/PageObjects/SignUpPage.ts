import {by, element, ElementFinder, promise} from "protractor";
import {waitForElement} from "../steps/CommonFunctions";

export class SignUpPage {
    private signUpButton: ElementFinder;
    private emailLabel: ElementFinder;
    private emailInputField: ElementFinder;
    private passwordLabel: ElementFinder;
    private passwordInputFiled: ElementFinder;
    private confirmPasswordLabel: ElementFinder;
    private confirmPasswordInputField: ElementFinder;
    private errorMessage: ElementFinder;

    constructor() {
        this.signUpButton = element(by.css('button[type="submit"]'));
        this.emailLabel = element(by.css('label[for="formEmail"]'));
        this.emailInputField = element(by.id('formEmail'));
        this.passwordLabel = element(by.css('label[for="formPassword"]'));
        this.passwordInputFiled = element(by.id('formPassword'));
        this.confirmPasswordLabel = element(by.css('label[for="formConfirmPassword"]'));
        this.confirmPasswordInputField = element(by.id('formConfirmPassword'));
        this.errorMessage = element(by.css('div[class="card text-danger border-danger"] div[class="card-body"]'));
    }

    waitForSignInButton() {
        return waitForElement(this.signUpButton);
    }

    isSignUpButtonPresent(): promise.Promise<boolean> {
        return this.signUpButton.isPresent();
    }

    getConfirmPasswordLabelText(): promise.Promise<string> {
        return this.confirmPasswordLabel.getText();
    }

    isConfirmPasswordInputFieldPresent(): promise.Promise<boolean> {
        return this.confirmPasswordInputField.isPresent();
    }

    isConfirmPasswordLabelPresent(): promise.Promise<boolean> {
        return this.confirmPasswordLabel.isPresent();
    }

}