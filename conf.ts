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
            launchReport: true,
            metadata: {
                "App Version": "0.3.2",
                "Test Environment": "STAGING",
                "Browser": "Chrome  54.0.2840.98",
                "Platform": "Windows 10",
                "Parallel": "Scenarios",
                "Executed": "Remote"
            }
        };

        reporter.generate(options);
    }
};