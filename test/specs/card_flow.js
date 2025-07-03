const cards = require('../pageobjects/cardflowPage.js')
const login = require('../pageobjects/loginPage.js')

describe("Card Flow Test Suite", () => {

    // CARD CREATION
    //1. Check if the create card button exist, if yes, then proceed to click on it and create card, if no, then move to test it block
    //2. Terminate the driver after each 
    it("Create Card - Positive", async () => {
        await login.initializeAppForLogin()
        await login.SuccessfulLogin('didie', 'Required@123')
        await login.maybeLaterForVan()
        await login.maybeLater()
        await login.campaign()
        await cards.cardCreation('2', '8888', '8888')
        await login.performLogout()
    });

    it("Create Card - Negative (Weak PIN)", async () => {
        await login.initializeAppForLogin()
        await login.SuccessfulLogin('didie', 'Required@123')
        await cards.cardCreation('5', '123', '123')
        await cards.verifyInvalidCardCreation()
        await login.performLogout()
    });

    it("Create Card - Edge (Very Large Amount)", async () => {
        await login.initializeAppForLogin()
        await login.SuccessfulLogin('didie', 'Required@123')
        await cards.cardCreation('1000000000', '8888', '8888')
        await cards.verifyCardCreationLimitError()
        await login.performLogout()
    });

    //CARD FUNDING
    it("Fund Card - Negative (Insufficient Balance)", async () => {
        await login.SuccessfulLogin('didie', 'Required@123')
        await cards.fundCard('1000000')
        await cards.verifyInsufficientFunds()
        await login.performLogout()
    });

    it("Fund Card - Edge (Zero Amount)", async () => {
        await login.SuccessfulLogin('didie', 'Required@123')
        await cards.fundCard('0')
        await cards.verifyInvalidAmount()
        await login.performLogout()
    });
    it("Fund Card - Positive", async () => {
        await login.initializeAppForLogin()
        await login.SuccessfulLogin('didie', 'Required@123')
        await login.maybeLaterForVan()
        await login.maybeLater()
        await login.campaign()
        await cards.fundCard('2')
        await login.performLogout()
    });
    // CARD WITHDRAWAL
    it("Withdraw from Card - Negative (Exceeding Balance)", async () => {
        await login.SuccessfulLogin('didie', 'Required@123')
        await cards.withdrawCard('1000000')
        await cards.verifyInsufficientFunds()
        await login.performLogout()
    });
    it("Withdraw from Card - Positive", async () => {
        await login.SuccessfulLogin('didie', 'Required@123')
        await login.maybeLaterForVan()
        await login.maybeLater()
        await login.campaign()
        await cards.withdrawCard('1')
        await login.performLogout()
    });
    // CARD FREEZE
    it("Freeze Card - Positive", async () => {
        await login.SuccessfulLogin('didie', 'Required@123')
        await login.maybeLaterForVan()
        await login.maybeLater()
        await login.campaign()
        await cards.verifyAlreadyFrozen() //if card is frozen, then terminate driver, but if not, freeze it
        await cards.freezeCard()
        await login.performLogout()
    });
    // CARD UNFREEZE
    it("Unfreeze Card - Positive", async () => {
        await login.SuccessfulLogin('didie', 'Required@123')
        await login.maybeLaterForVan()
        await login.maybeLater()
        await login.campaign()
        await cards.verifyAlreadyFrozenCard() //if card is unfrozen, then terminate driver, but if not, unfreeze it
        await cards.unfreezeCard()
        await login.performLogout()
    });
    after(() => {
        require('./sendMoney.js')
    });

});
