import {binding, when} from "cucumber-tsflow/dist";
import {assertThat, is, not} from "hamjest";
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
                await driver.get('http://localhost');

                let signInButton = await driver.findElement(By.xpath('//button[text()="Sign In"]'));

                assertThat('Sign In button not present', signInButton, is(not(undefined)))
            }
            finally{
                await driver.quit();
            }
        })();
    }

}