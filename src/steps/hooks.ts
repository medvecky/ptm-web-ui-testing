import {After, Before} from "cucumber";
import {browser} from "protractor";
import {deleteUserWithContext} from "./CommonFunctions";
import {SharedContext} from "./sharedContext";




Before(async () => {
    await browser.waitForAngularEnabled(false);
    await browser.get('http://localhost');
});


After(async (scenario) => {
    await browser.executeScript('window.sessionStorage.clear();');
    await browser.executeScript('window.localStorage.clear();');

    if (SharedContext.accessToken) {
        await deleteUserWithContext(SharedContext.accessToken);
    }
});