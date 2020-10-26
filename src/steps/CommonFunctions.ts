import {browser, ElementFinder, protractor} from "protractor";
import instance from './axios.config';

const axios = instance;

export function waitForElement(element: ElementFinder) {
    const EC = protractor.ExpectedConditions;
    return browser.wait(
        EC.visibilityOf(element), 10000, 'Element taking too long to appear in the DOM');
}

export function deleteUserWithContext(accessToken:string) {
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

