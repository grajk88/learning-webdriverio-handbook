class Base {

    launchApplication(){
        browser.url('https://parabank.parasoft.com/parabank/index.htm')
        browser.maximizeWindow()
    }

}
export default new Base()