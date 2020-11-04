import {by, element, ElementFinder, promise} from "protractor";
import {waitForElement} from "../steps/CommonFunctions";

export class ProjectComponent {
    private projectTitleCssSelector: string;
    private projectTitle: ElementFinder;
    private projectDescription: ElementFinder;
    private deleteButton: ElementFinder;
    private editButton: ElementFinder;

    constructor() {
        this.projectTitleCssSelector = 'div[class="card-title h5"]';
        this.projectTitle = element(by.css(this.projectTitleCssSelector));
        this.projectDescription = element(by.css('div.card-body > p.card-text:nth-child(2)'));
        this.editButton = element(by.cssContainingText('button', 'Edit'));
        this.deleteButton = element(by.cssContainingText('button', 'Delete'));
    }

    waitForCardTitleWithText(projectTitle: string) {
        return waitForElement(element(by.cssContainingText(this.projectTitleCssSelector,projectTitle)));
    }

    getTitleText(): promise.Promise<string> {
        return this.projectTitle.getText();
    }

    getDescriptionText(): promise.Promise<string> {
        return this.projectDescription.getText();
    }


    isEditButtonPresent(): promise.Promise<boolean> {
        return this.editButton.isPresent();
    }

    isDeleteButtonPresent(): promise.Promise<boolean> {
        return this.deleteButton.isPresent();
    }
}
