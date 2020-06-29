import loginPage from '../../page_objects/LoginPage'
import base from '../../page_objects/BasePage'
import accountOverviewPage from '../../page_objects/AccountOverviewPage'
import billPaymentPage from '../../page_objects/BillPaymentPage'

describe('Bill Payment - ParaBank Application',()=>{

    before('Launch Application',()=>{
        base.launchApplication()
    })

    it('Login into the ParaBank application',()=>{
        
        // Calls login function from LoginPage PO class
        loginPage.login()
        
        // Wait for the H2 tag
        accountOverviewPage.waitForAccountServicesLabel()

    })

    it('Bill Payment',()=>{

        // Navigaton from Account Overview Page to Bill Payments Page
        accountOverviewPage.navigateToBillPaymentPage()
        
        // Fill in Bill Payment Form
        billPaymentPage.fillBillPaymentForm()

    })

    after('Log Out of the application',()=>{

         // Identify using text if it is unique
         $('*=Log Out').click()

         // Check whether you are in the Login page again
         $('input[name="username"]').waitForExist()

    })

})