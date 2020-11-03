import {browser, ElementFinder, promise, protractor} from "protractor";
import instance from './axios.config';
import {SharedContext} from "./sharedContext";

const axios = instance;

export function waitForElement(element: ElementFinder) {
    const EC = protractor.ExpectedConditions;
    return browser.wait(
        EC.visibilityOf(element), 10000, 'Element taking too long to appear in the DOM');
}

export function deleteUserWithContext(accessToken: string) {
    axios.delete('/tasks/all', {
        headers: {
            Authorization: 'Bearer ' + accessToken//the token is a variable which holds the token
        }
    })
        .then(function (response) {
        })
        .catch(function (error) {
        });

    axios.delete('/projects/all', {
        headers: {
            Authorization: 'Bearer ' + accessToken//the token is a variable which holds the token
        }
    })
        .then(function (response) {
        })
        .catch(function (error) {
        });

    return axios.delete('/auth/delete/user', {
        headers: {
            Authorization: 'Bearer ' + accessToken//the token is a variable which holds the token
        }
    })
        .then(function (response) {
        })
        .catch(function (error) {
        });
}

export function createUserUsingApi(username: string, password: string) {
    return axios.post('/auth/signup', {
        username: username,
        password: password
    })
        .then(function (response) {
            return axios.post('/auth/signin', {
                username: username,
                password: password
            })
                .then(function (response) {
                    SharedContext.accessToken = response.data.accessToken;
                })
                .catch(function (error) {
                    console.log("User not creates, ", error)
                });
        })
        .catch(function (error) {
        });
}

export function signInUserUsingApi(username: string, password: string) {
    return axios.post('/auth/signin', {
        username: username,
        password: password
    })
        .then(function (response) {
            SharedContext.accessToken = response.data.accessToken;
            return setTokenInBrowserStorage(response.data.accessToken);
        })
        .catch(function (error) {
        });
}

export function getTokenFromBrowserStorage(): promise.Promise<unknown> {
    return browser.executeScript("return window.localStorage.getItem('token');");
}

export async function setTokenInBrowserStorage(token: string) {
    const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
    await browser.executeScript(`return window.localStorage.setItem('token','${token}');`);
    await browser.executeScript(`return window.localStorage.setItem('expirationDate','${expirationDate}');`);
}


export function hasCssClass(element: ElementFinder, cssClass: string): promise.Promise<boolean> {
    return element.getAttribute('class').then(function (classes) {
        return classes.split(' ').indexOf(cssClass) !== -1;
    });
}

export async function navigateToPage(destination: string) {
    await browser.get(destination);
}

export async function navigateToCreateTaskPage() {
    return navigateToPage('http://localhost/#/new-task');
}

export function createProject(title, description) {
    return axios.post('/projects', {
        title: title,
        description: description
    }, {
        headers: {
            Authorization: 'Bearer ' + SharedContext.accessToken
        }
    })
        .then(function (response) {
        })
        .catch(function (error) {
        });
}

