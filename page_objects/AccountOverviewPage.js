class AccountOverviewPage {

    get accountServicesLabel(){
        return $('h2')
    }

    get billPaymentLink(){
        return $('*=Bill Pay')
    }

    waitForAccountServicesLabel(){
        this.accountServicesLabel.waitForExist()
    }

    navigateToBillPaymentPage(){
        this.billPaymentLink.click()
    }
}

export default new AccountOverviewPage()