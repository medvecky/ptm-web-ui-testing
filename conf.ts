import {Config} from "protractor";
import * as reporter from "cucumber-html-reporter";

export let config: Config = {
    directConnect: true,
    specs: ['../src/features/**/*.feature'],
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    cucumberOpts: {
        format:'json:cucumber_report.json',
        require: [
            'src/steps/**/*.js'
        ]
    },
    onComplete: () => {
        const options = {
            theme: 'bootstrap',
            jsonFile: './cucumber_report.json',
            output: './cucumber_report.html',
            reportSuiteAsScenarios: true,
            launchReport: true
        };

        reporter.generate(options);
    }
};