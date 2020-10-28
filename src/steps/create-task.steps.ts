import {Given} from "cucumber";
import {navigateToCreateTaskPage, signInUserUsingApi} from "./CommonFunctions";
import {CreateTaskPage} from "../PageObjects/CreateTaskPage";
const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;

const createTaskPage = new CreateTaskPage();

Given('user with username: {string} password: {string} signed in',
    async (username: string, password: string) => {
    return signInUserUsingApi(username, password);
});

Given('user got to create task page', async () =>  {
    return navigateToCreateTaskPage();
});

Given('user waits for create task button', async () =>  {
   return createTaskPage.waitForCreateTaskButton();
});

