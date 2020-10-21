import {After, Before, Status} from "cucumber";
import {browser} from "protractor";


Before(async () => {
    await browser.waitForAngularEnabled(false);
    await browser.get('http://localhost');
});

//
// After(async (scenario) => {
//     // This hook will be executed before scenarios tagged with @foo
//     console.log("Test is completed");
//     if (scenario.result.status === Status.FAILED) {
//         //code to take screesnhot
//         const screenshot = await browser.takeScreenshot();
//
//         attach(screenshot, "image/png");
//     }
// });