class BillPaymentPage {

    get billPaymentLabel(){
        return $('#rightPanel > div > div:nth-child(1) > h1')
    }

    get payeeNameTextbox(){
        return $('input[ng-model="payee.name"]')
    }

    get streetNameTextbox(){
        return $('input[ng-model="payee.address.street"]')
    }

    get cityNameTextbox(){
        return $('input[ng-model="payee.address.city"]')
    }

    get stateTextbox(){
        return $('input[ng-model="payee.address.state"]')
    }

    get zipcodeTextbox(){
        return $('input[ng-model="payee.address.zipCode"]')
    }

    get phoneNumberTextbox(){
        return $('input[ng-model="payee.phoneNumber"]')
    }

    get accountNumberTextbox(){
        return $('input[ng-model="payee.accountNumber"]')
    }

    get verifyAccountNumberTextbox(){
        return $('input[ng-model="verifyAccount"]')
    }

    get amountTextbox(){
        return $('input[ng-model="amount"]')
    }

    get accountIdSelectbox(){
        return $('select[ng-model="accountId"]')
    }

    get sendPaymentButton(){
        return $('input[type="submit"')
    }

    get billPaymentResult(){
        return $('#rightPanel > div > div:nth-child(2) > p:nth-child(2)')
    }

    fillBillPaymentForm(){

        this.billPaymentLabel.isEqual('Bill Payment Service')
        this.payeeNameTextbox.setValue('Automation')
        this.streetNameTextbox.setValue('Tester')
        this.cityNameTextbox.setValue('London')
        this.stateTextbox.setValue('Lodon')
        this.zipcodeTextbox.setValue('NR1 1UH')
        this.phoneNumberTextbox.setValue('0989878765')
        this.accountNumberTextbox.setValue('12345')
        this.verifyAccountNumberTextbox.setValue('12345')
        this.amountTextbox.setValue('100')
        this.accountIdSelectbox.selectByAttribute('value','12678')
        this.sendPaymentButton.click()

        this.billPaymentResult.isEqual('Bill Payment to Automation in the amount of $100.00 from account 12678 was successful.')

    }
}
export default new BillPaymentPage()