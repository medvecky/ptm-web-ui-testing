import {by, element, ElementFinder, promise} from "protractor";
import {hasCssClass} from "../steps/CommonFunctions";

export class NavBarNotSignedIn {
    private signUpLink: ElementFinder;
    private signInLink: ElementFinder;
    private homeLink: ElementFinder;

    constructor() {
        this.signUpLink = element(by.css('a[href="#/signup"]'));
        this.signInLink = element(by.css('a[href="#/signin"]'));
        this.homeLink = element(by.css('a[href="#home"]'));
    }

    isSignUpLinkPresent():promise.Promise<boolean> {
        return this.signUpLink.isPresent();
    }

    isSignUpLinkActive(): promise.Promise<boolean> {
        return hasCssClass(this.signUpLink, 'active');
    }

    clickOnSignUpLink(): promise.Promise<void>  {
        return this.signUpLink.click();
    }

    isSignInLinkPresent():promise.Promise<boolean> {
        return this.signInLink.isPresent();
    }

    isSignInLinkActive(): promise.Promise<boolean> {
        return hasCssClass(this.signInLink, 'active');
    }

    clickOnSignInLink(): promise.Promise<void>  {
        return this.signInLink.click();
    }

    isHomeLinkPresent():promise.Promise<boolean> {
        return this.homeLink.isPresent();
    }

    clickOnHomeLink(): promise.Promise<void>  {
        return this.homeLink.click();
    }
}