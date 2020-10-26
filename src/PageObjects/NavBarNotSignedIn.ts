import {by, element, ElementFinder, promise} from "protractor";

export class NavBarNotSignedIn {
    private signUpLink: ElementFinder;

    constructor() {
        this.signUpLink = element(by.css('a[href="#/signup"]'));
    }

    isSignUpLinkPresent():promise.Promise<boolean> {
        return this.signUpLink.isPresent();
    }

    clickOnSignUpLink(): promise.Promise<void>  {
        return this.signUpLink.click();
    }


}