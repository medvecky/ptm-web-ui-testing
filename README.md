# ptm-web-ui-testing
UI tests suite for [ptm-react-web-client](https://github.com/medvecky/ptm-react-web-client)

## Project setup 

### Prerequisites

#### Allure Framework

```bash
#Linux
sudo apt-add-repository ppa:qameta/allure
sudo apt-get update 
sudo apt-get install allure
```

```bash
#Mac OS X
brew install allure
```

```bash
#Windows
scoop install allure
```
### Tests setup and run

```bash
npm install
```

Download [web driver binaries](http://chromedriver.storage.googleapis.com/index.html)

Unarchive and put to ```node_modules/.bin```

start SUT 
* ptm-server, description in documentation:
   [ptm-server/README](https://github.com/medvecky/ptm-server/blob/master/README.md)
* ptm-react-web-client, description in documentation:
  [ptm-react-web-client/README](https://github.com/medvecky/ptm-react-web-client/blob/master/README.md)   

* run tests 

    ```bash
      npm test
      #Show allure reports  
      allure serve ./out/allure-results
    ```
