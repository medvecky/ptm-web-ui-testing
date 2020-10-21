import {by, element, ElementFinder, promise} from "protractor";

export class LoginPage {

    private signInButton: ElementFinder;
    private emailLabel: ElementFinder;
    private emailInputField: ElementFinder;
    private passwordLabel: ElementFinder;
    private passwordInputFiled: ElementFinder;


    constructor() {
        this.signInButton = element(by.css('button[type="submit"]'));
        this.emailLabel = element(by.css('label[for="formEmail"]'));
        this.emailInputField = element(by.css('input[placeholder="Enter email"]'));
        this.passwordLabel = element(by.css('label[for="formPassword"]'));
        this.passwordInputFiled = element(by.css('input[placeholder="password"]'));
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
        await this.emailInputField.sendKeys(password);
    }

    async pressSubmitButton() {
       await this.signInButton.click();
    }

    async signIn(email: string, password:string) {
        await this.setEmailText(email);
        await this.setPasswordText(password);
        await this.pressSubmitButton();
    }
}