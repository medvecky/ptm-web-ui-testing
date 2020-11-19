import {by, element, ElementFinder, promise} from "protractor";
import {hasCssClass} from "../steps/CommonFunctions";

export class NavBarSignedIn {
    private brandLink: ElementFinder;
    private homeLink: ElementFinder;
    private newTaskLink: ElementFinder;
    private newProjectLink: ElementFinder;
    private signOutButton: ElementFinder;

    constructor() {
        this.brandLink = element(by.css('a[href="#home"]'));
        this.homeLink = element(by.css('a[href="#/"]'));
        this.newTaskLink = element(by.css('a[href="#/new-task"]'));
        this.newProjectLink = element(by.css('a[href="#/new-project"]'));
        this.signOutButton = element(by.cssContainingText('button','Sign Out'));
    }

    isBrandLinkPresent(): promise.Promise<boolean> {
        return this.brandLink.isPresent();
    }

    isHomeLinkPresent(): promise.Promise<boolean> {
        return this.homeLink.isPresent();
    }

    isHomeLinkActive(): promise.Promise<boolean> {
        return hasCssClass(this.homeLink, 'active');
    }

    clickOnHomeLink(): promise.Promise<void> {
        return this.homeLink.click();
    }

    isTaskLinkPresent(): promise.Promise<boolean> {
        return this.newTaskLink.isPresent();
    }

    isTaskLinkActive(): promise.Promise<boolean> {
        return hasCssClass(this.newTaskLink, 'active');
    }

    clickOnTaskLink(): promise.Promise<void> {
        return this.newTaskLink.click();
    }

    isProjectLinkPresent(): promise.Promise<boolean> {
        return this.newProjectLink.isPresent();
    }

    isProjectLinkActive(): promise.Promise<boolean> {
        return hasCssClass(this.newProjectLink, 'active');
    }
    clickOnProjectLink(): promise.Promise<void> {
        return this.newProjectLink.click();
    }

    isSignOutButtonPresent(): promise.Promise<boolean> {
        return this.signOutButton.isPresent();
    }

    clickOnSignOutButton(): promise.Promise<void> {
        return this.signOutButton.click();
    }
}