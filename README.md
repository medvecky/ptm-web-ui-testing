# ptm-web-ui-testing
UI tests suite for [ptm-react-web-client](https://github.com/medvecky/ptm-react-web-client)

## Project setup 

### Prerequisites

start SUT 
* ptm-server, description in documentation:
   [ptm-server/README](https://github.com/medvecky/ptm-server/blob/master/README.md)
* ptm-react-web-client, description in documentation:
  [ptm-react-web-client/README](https://github.com/medvecky/ptm-react-web-client/blob/master/README.md)
  
### Install dependencies

```bash
npm install
npm run webdriver-update
```   

### run tests 

```bash
  npm test
  #Show allure reports  
  allure serve ./out/allure-results
```
