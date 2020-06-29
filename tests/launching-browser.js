describe('Launch Google Chrome Browser',()=>{

    it('Launching Google Chrome Browser',()=>{

        browser.url('https://parabank.parasoft.com/')

        // Example for setting a viewport
        browser.setWindowSize(800,600)

        // Maximise the browser
        browser.maximizeWindow()

        // Example for component visibility and text assertions
        const heading = $('h2')
        expect(heading).toBeVisible()

        // Example for id attribute
        const mainPanel = $('#mainPanel')
        mainPanel.waitForExist()

        // Example for Get Element Text
        const subTitle = $('#loginPanel > form > p:nth-child(1) > b').getText()
        console.log(subTitle)

        // Example for getting Attribute
        const button = $('#loginPanel > form > div:nth-child(5) > input')
        expect(button).toHaveAttrContaining('type', 'submit')

        // Example for getting the Value
        const logInButton = $('#loginPanel > form > div:nth-child(5) > input')
        expect(logInButton).toHaveValue('Log In')

        // Example for name attribute
        const userNameTextBox = $('[name="username"]')
        userNameTextBox.waitForExist()
        userNameTextBox.setValue('john')

        // Example for name attribute
        const passwordTextBox = $('[name="password"]')
        passwordTextBox.waitForExist()
        passwordTextBox.setValue('demo')

        //Full Screen Screenshot
        browser.saveScreenshot('./screenshots/Login_Page.png')

        // Example for xpath attribute
        const loginButton =
         $('//*[@id="loginPanel"]/form/div[3]/input')
        loginButton.click()

        // Example for class attribute
        const fullName = $('.smallText')
        fullName.waitForExist()

        // Example for link text attribute
        const openAccountLink = $('=Open New Account')
        openAccountLink.waitForExist()

        // Example for partial link text attribute
        const logOutLink = $('*=Out')
        logOutLink.waitForExist()
        logOutLink.click()

    })

})