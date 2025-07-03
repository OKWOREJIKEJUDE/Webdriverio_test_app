const myLogin = require('../pageobjects/loginPage.js')

const correct_gigtag = 'didie'
const correct_password = 'Required@123'
const correct_phoneNumber = '08136034002'
const correct_email = 'ahmed-ojo@gmail.com'
const incorrect_gigtag = 'pelaher'
const incorrect_password = 'Reqkiofjhr564'
const incorrect_phoneNumber = '60340028975646'
const incorrect_email = 'ahmedyutbj@gmail.com'

describe('Login Test Suites', () => {
    beforeEach(async () => {
        myLogin.initializeAppForLogin()
    });
    afterEach(async () => {
        myLogin.performLogout()
    });

    // POSITIVE TEST CASES
    it('Login with correct gigtag and correct password', async () => {
        await myLogin.SuccessfulLogin(correct_gigtag, correct_password)
        await myLogin.maybeLaterForVan()
        await myLogin.maybeLater()
    });

    it('Login with correct phone number and correct password', async () => {
        await myLogin.SuccessfulLogin(correct_phoneNumber, correct_password)
        await myLogin.maybeLater()
        await myLogin.campaign()
    });

    it('Login with correct email and correct password', async () => {
        await myLogin.SuccessfulLogin(correct_email, correct_password)
        await myLogin.maybeLater()
        await myLogin.campaign()
    });
    // NEGATIVE TEST CASES
    it("Login with incorrect gigtag and correct password", async () => {
        await myLogin.UnSuccessfulLogin(incorrect_gigtag, correct_password)
        await myLogin.clearFields()
    });

    it("Login with incorrect gigtag and incorrect password", async () => {
        await myLogin.UnSuccessfulLogin(incorrect_gigtag, incorrect_password)
        await myLogin.clearFields()
    });

    it("Login with incorrect phone number and incorrect password", async () => {
        await myLogin.UnSuccessfulLogin(incorrect_phoneNumber, incorrect_password)
        await myLogin.clearFields()
    });
    //EDGE CASES
    it("Login with empty credentials", async () => {
        await myLogin.UnSuccessfulLogin('', '')
        await myLogin.clearFields()
    });

    after(() => {
        require('./billsPayment.js')
    });

});
