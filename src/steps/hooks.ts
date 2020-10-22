import {After, Before, Status} from "cucumber";
import {browser} from "protractor";


Before(async () => {
    await browser.waitForAngularEnabled(false);
    await browser.get('http://localhost');
});


After(async (scenario) => {
    await browser.executeScript('window.sessionStorage.clear();');
    await browser.executeScript('window.localStorage.clear();');
});