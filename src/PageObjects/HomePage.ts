import {by, element, ElementArrayFinder, ElementFinder, promise} from "protractor";
import {waitForElement} from "../steps/CommonFunctions";

export class HomePage {
    private clearFilterButton: ElementFinder;
    private tasksTitles: ElementArrayFinder;
    private tasksWithoutProjectButton: ElementFinder;
    private openBadge: ElementFinder;
    private inProgressBadge: ElementFinder;
    private  doneBadge: ElementFinder;
    private projectsBadge: ElementFinder;

    constructor() {
        this.clearFilterButton = element(by.cssContainingText('button', 'Clear Filter'));
        this.tasksWithoutProjectButton =
            element(by.cssContainingText('button', 'Tasks without project'));
        this.tasksTitles = element.all(by.css('a[class="card-title"]'));
        this.openBadge = element(by.cssContainingText('span.badge.badge-info', 'OPEN'));
        this.inProgressBadge =
            element(by.cssContainingText('span.badge.badge-info', 'IN_PROGRESS'));
        this.doneBadge = element(by.cssContainingText('span.badge.badge-info', 'DONE'));
        this.projectsBadge
            = element(by.cssContainingText('span.badge.badge-info', 'PROJECTS'));
    }

    isClearFilterButtonPresent(): promise.Promise<boolean> {
        return this.clearFilterButton.isPresent();
    }

    isTasksWithoutProjectButtonPresent(): promise.Promise<boolean> {
        return this.tasksWithoutProjectButton.isPresent();
    }

    waitForClearFilterButton() {
        return waitForElement(this.clearFilterButton);
    }

    getNumberOfTasks(): promise.Promise<number> {
        return this.tasksTitles.count();
    }

    getNthTaskTitleText(taskNumber): promise.Promise<string> {
        return this.tasksTitles.get(taskNumber - 1).getText();
    }

    clickOnTaskWithoutProjectButton(): promise.Promise<void> {
        return this.tasksWithoutProjectButton.click();
    }

    clickOnClearFilterButton(): promise.Promise<void> {
        return this.clearFilterButton.click();
    }

    isOpenBadgePresent(): promise.Promise<boolean> {
        return this.openBadge.isPresent();
    }

    isInProgressBadgePresent(): promise.Promise<boolean> {
        return this.inProgressBadge.isPresent();
    }

    isDoneBadgePresent(): promise.Promise<boolean> {
        return this.doneBadge.isPresent();
    }

    isProjectBadgePresent(): promise.Promise<boolean> {
        return this.projectsBadge.isPresent();
    }
  }