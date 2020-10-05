import {binding, when} from "cucumber-tsflow/dist";
import {assertThat, is} from "hamjest";
import {Builder, By, Key, until} from 'selenium-webdriver';

@binding()
export class HelloWorld {
    // @ts-ignore
    @when(/^Hello step$/)
    public hello_step() {
        const hello = 'Hello World';
        console.log(hello);
        assertThat('Test fails', hello, is('Hello World'));

        (async function example() {
            let driver = await new Builder().forBrowser('chrome').build();
            try {
                // Navigate to Url
                await driver.get('https://www.google.com');

                // Enter text "cheese" and perform keyboard action "Enter"
                await driver.findElement(By.name('q')).sendKeys('cheese', Key.ENTER);

                let firstResult = await driver.wait(until.elementLocated(By.css('h3>div')), 10000);

                console.log(await firstResult.getAttribute('textContent'));
            }
            finally{
                await driver.quit();
            }
        })();
    }

}