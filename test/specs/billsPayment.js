const bills = require('../pageobjects/billsPaymentPage.js')
const login = require('../pageobjects/loginPage.js')

describe("Bills Payment Test Suite", () => {

    // POSITIVE TEST CASES
    it("Airtime Purchase - Positive", async () => {
        await login.initializeAppForLogin()
        await login.SuccessfulLogin('didie', 'Required@123')
        await login.maybeLater()
        await login.campaign()
        await bills.airtimePurchase('100', '07067015404', '1234')
        await login.performLogout()
    });

    it("Data Purchase - Positive", async () => {
        await login.initializeAppForLogin()
        await login.SuccessfulLogin('didie', 'Required@123')
        await login.maybeLater()
        await login.campaign()
        await bills.dataPurchase('08032240668', '1234')
        await login.performLogout()
    });

    after(() => {
        require('./card_flow.js')
    });

});

