const page_objects = require('../pageobjects/page_objects.js')

describe('Login Test Suites', () => {
    // //NEGATIVE TEST CASES
    it("Login with incorrect tag and correct password", async () => {
        await page_objects.initializeAppForLogin()
        //await page_objects.pop()
        //await $('~Later').click()
        await page_objects.UnSuccessfulLogin('incorrect tag', 'Required@123')
        await page_objects.verifyInvalidCredentials()
        await page_objects.clearFields()
    });

    it("Login with incorrect tag and incorrect password", async () => {
        await page_objects.UnSuccessfulLogin('ttteeeejjf', 'Reqgdfhgbxuired@123')
        await page_objects.verifyInvalidCredentials()
        await page_objects.clearFields()
    });

    it("Login with incorrect email and correct password", async () => {
        await page_objects.UnSuccessfulLogin('okworejikejddb@gmail.com', 'Required@123')
        await page_objects.verifyInvalidCredentials()
        await page_objects.clearFields()
    });

    it("Login with incrrect email and incorrect password", async () => {
        await page_objects.UnSuccessfulLogin('ejhhdikeojkdh@gmail.co', 'Requhdhdbxgired@123')
        await page_objects.verifyInvalidCredentials()
        await page_objects.clearFields()
    });

    it("Login with incorrect phone Number and correct password", async () => {
        await page_objects.UnSuccessfulLogin('090886363846436372', 'Required@123')
        await page_objects.verifyInvalidCredentials()
        await page_objects.clearFields()
    });

    it("Login with incorrect phone Number and incorrect password", async () => {
        await page_objects.UnSuccessfulLogin('0908636537462736373', 'Reqydgtdsuired@123')
        await page_objects.verifyInvalidCredentials()
        await page_objects.clearFields()
    });

    //POSITIVE TEST CASES
    it('Login with correct gigtag and correct password', async () => {
        await page_objects.SuccessfulLogin('didyie', 'Required@123')
        await page_objects.verifyBellIconPresence()
        await $('~Settings\nTab 5 of 5').click()
        await page_objects.performLogout()
    });

    it('Login with correct phone number and correct password', async () => {
        await page_objects.SuccessfulLogin('08012537771', 'Required@123')
        await page_objects.verifyBellIconPresence()
        await $('~Settings\nTab 5 of 5').click()
        await page_objects.performLogout()
    });

    it('Login with correct email and correct password', async () => {
        await page_objects.SuccessfulLogin('ejikeo+51@gmail.com', 'Required@123')
        await page_objects.verifyBellIconPresence()
        await $('~Settings\nTab 5 of 5').click()
        await page_objects.performLogout()
    });

    after(() => {
        require('./billsPayment.js')
    });

});
