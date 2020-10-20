import {Given} from "cucumber";
import {browser} from "protractor";

Given('User opens todo app', async ()=> {
    await browser.waitForAngularEnabled(false);
    await browser.get('http://localhost/');
});