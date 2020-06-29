class LoginPage {

    get usernameTextbox(){
        return $('input[name="username"]')
    }

    get passwordTextbox(){
        return $('input[name="password"]')
    }

    login(){
        this.usernameTextbox.setValue('john')
        this.passwordTextbox.setValue('demo')
        browser.keys('Enter')
    }
}

export default new LoginPage()