describe('Bill Payment - ParaBank Application',()=>{

    it('Login into the ParaBank application',()=>{

        // Launch the URL
        browser.url('https://parabank.parasoft.com/parabank/index.htm')
        
        // Identify the username field using type and name properties
        $('input[name="username"]').waitForExist()
        
        // Identify the password field using its selector property
        $('#loginPanel > form > div:nth-child(2) > input').setValue('john')
        $('#loginPanel > form > div:nth-child(4) > input').setValue('demo')
        
        // Use Keys to do keyboard action of hitting ENTER
        browser.keys('Enter')
        
        // Wait for the H2 tag
        $('h2').waitForExist()

    })

    it('Bill Payment',()=>{

        $('*=Bill Pay').click()
        $('#rightPanel > div > div:nth-child(1) > h1').isEqual('Bill Payment Service')
        $('input[ng-model="payee.name"]').setValue('Automation')
        $('input[ng-model="payee.address.street"]').setValue('Automation')
        $('input[ng-model="payee.address.city"]').setValue('Automation')
        $('input[ng-model="payee.address.state"]').setValue('Automation')
        $('input[ng-model="payee.address.zipCode"]').setValue('Automation')
        $('input[ng-model="payee.phoneNumber"]').setValue('1234567890')
        $('input[ng-model="payee.accountNumber"]').setValue('675645')
        // $('input[ng-model="verifyAccount"]').setValue('675645')
        $('input[ng-model="amount"]').setValue('100')
        
       // $('select[ng-model="accountId"]').selectByAttribute('value','12678')

        $('input[type="submit"').click()
        browser.pause(5000)

       //  $('#rightPanel > div > div:nth-child(2) > p:nth-child(2)').isEqual('Bill Payment to Automation in the amount of $100.00 from account 12678 was successful.')

    })

    after('Log Out of the application',()=>{

         // Identify using text if it is unique
         $('*=Log Out').click()

         // Check whether you are in the Login page again
         $('input[name="username"]').waitForExist()

    })

})