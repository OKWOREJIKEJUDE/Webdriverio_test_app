import { expect } from 'webdriverio'
import { touchAction } from 'webdriverio'
import * as webdriverio from 'webdriverio';

class PageObjects {
    // Locators that can be reused
    get inputUsername() {
        return $('//android.widget.EditText[@index=4]');
    }
    get inputPassword() {
        return $('//android.widget.EditText[@index=5]');
    }
    get btnSubmit() {
        return $('~Log in');
    }
    get popUpp() {
        return $('~Later');
    }
    get bellIcon() {
        return $('//android.widget.ImageView[@index=2]')
    }
    get logOut() {
        return $('~Log out');
    }
    get logOutButton() {
        return $('~Log out');
    }
    get sendMoneyButton() {
        return $('~Send Money');
    }
    get sendToGigbancUser() {
        return $('~Send to Gigbanc user');
    }
    get userGigtag() {
        return $('//android.widget.EditText[@index=1]');
    }
    get userNarration() {
        return $('//android.widget.EditText[@index=5]');
    }
    get userAmount() {
        return $('//android.widget.EditText[@index=7]');
    }
    get nextButton() {
        return $('~Next')
    }
    get enterPIN() {
        return $('//android.view.View[@index=10]')
    }
    get requestMoneyButton() {
        return $('~Request Money')
    }
    get sendPaymentLink() {
        return $('~Send Payment link\nReceive money from people using a payment link')
    }
    get fundWallet() {
        return $('~Fund Wallet\nFund your wallet using a payment link')
    }
    get fromOtherBank() {
        return $('~From Other Bank\nShare your account details to receive from local bank')
    }
    get enterAmount() {
        return $('//android.widget.EditText[@index=1]')
    }
    get continuebutton() {
        return $('~Continue')
    }
    get cardDetails() {
        return $('//android.widget.EditText[@index=3]')
    }
    get nairaAccountDetails() {
        return $('~Naira Account Details')
    }
    get parentElement() {
        return $('//android.view.View[@index=0]')
    }
    get childElement() {
        return $('//android.view.View[@index=10]')
    }
    //This method starts the App(by clicking on the Login button on onboarding screen)
    async initializeAppForLogin() {
        await browser.pause(3000);
        const gigLogin = await $('~Log in');
        await gigLogin.click();
        await browser.pause(3000);
    }
    //This method starts the App(by clicking on the SignUp button on onboarding screen)
    async initializeAppForSignUp() {
        await browser.pause(3000);
        const gigRegister = await $('~Register');
        await gigRegister.click();
        await browser.pause(3000);
    }
    async pop() {
        this.popUpp.click()
    }
    //This method is for successful Login scenarios
    async SuccessfulLogin(username, password) {
        await this.inputUsername.click()
        await this.inputUsername.setValue(username)
        await this.inputPassword.click()
        await this.inputPassword.setValue(password)
        await driver.hideKeyboard()
        await this.btnSubmit.click()
        await browser.pause(1000)
    }
    //This method is for Unsuccessful Login scenarios
    async UnSuccessfulLogin(username, password) {
        await this.inputUsername.click()
        await this.inputUsername.setValue(username)
        await this.inputPassword.click()
        await this.inputPassword.setValue(password)
        await driver.hideKeyboard()
        browser.keys('Tab') //used to remove focus on the keyboard
        await this.btnSubmit.click()
    }
    //Clears the field on the login so user can enter another wrong details 
    async clearFields() {
        await this.inputUsername.setValue('')
        await this.inputPassword.setValue('')
    }
    //Check the presence of Bellicon on the Login screen 
    async verifyBellIconPresence() {
        const isBellIconVisible = await this.bellIcon.isDisplayed()
        if (isBellIconVisible) {
            console.log('Positive scenarios test has passed')
        } else {
            console.log('Positive scenarios test has failed')
        }
    }
    //Method to Logout from the dashboard
    async performLogout() {
        await this.logOut.click()
        await browser.pause(1000)
        await this.logOutButton.click()
    }
    //This method verifies the invalid credentials error message that pops up on the login screen
    async verifyInvalidCredentials() {
        const invalidCredentials = await $('~invalid login credentials')
        await browser.pause(1000)
        if (invalidCredentials) {
            console.log("Test Passed for negative scenario")
        } else {
            console.log("Test Failed for negative scenario")
        }
    }

    //Card Creation
    async cardCreation(CREATION_AMOUNT, CARD_CREATION_PIN, CONFIRM_CARD_CREATION_PIN) {
        await browser.pause(3000)
        const cardHome = await $('~Cards\nTab 2 of 5')
        await cardHome.click()
        await browser.pause(10000)
        const virtualCard = await $('~Create a virtual card')
        await virtualCard.click()
        await browser.pause(3000)
        const selectUSD = await $('~$\nDollar')
        await selectUSD.click()
        await browser.pause(3000)
        const continueWithUSDoption = await $('~Continue')
        await continueWithUSDoption.click()
        await browser.pause(3000)
        const awarenessScreen = await $('~Got it')
        await awarenessScreen.click()
        await browser.pause(3000)
        const enterCreationAmount = await $('//android.widget.EditText[@index=4]')
        await enterCreationAmount.click()
        enterCreationAmount.setValue(CREATION_AMOUNT)
        await browser.pause(3000)
        const continueCreation = await $('~Continue')
        await continueCreation.click()
        await browser.pause(3000)
        //enter card creation pin
        const enter_new_card_pin = $('.android.widget.EditText')//by class
        await enter_new_card_pin.setValue(CARD_CREATION_PIN)
        await browser.pause(5000)
        //confirm card creation pin
        const confirm_new_card_pin = $('.android.widget.EditText')//by class
        await confirm_new_card_pin.click()
        await confirm_new_card_pin.setValue(CONFIRM_CARD_CREATION_PIN)
        await browser.pause(10000)
        await $('~Go to Card').click()
        await browser.pause(5000)
        await $('~Settings\nTab 5 of 5').click()
    }

    //Card Funding
    async fundCard(funding_value) {
        await browser.pause(3000)
        const cardHome = await $('~Cards\nTab 2 of 5')
        await cardHome.click()
        await browser.pause(10000)
        const click_on_card = await $('//android.widget.ImageView[@index=1]')
        await click_on_card.click()
        await browser.pause(3000)
        const fund_card = await $('~Fund card')
        await fund_card.click()
        await browser.pause(3000)
        const enter_funding_amount = await $('//android.widget.EditText[@index=3]')
        await enter_funding_amount.click()
        await enter_funding_amount.addValue(funding_value)
        await browser.pause(3000)
        const continueButton = await $('~Continue')
        await continueButton.click()
        await browser.pause(3000)
        const goToCard = await $('~Go to Card')
        await goToCard.click()
        await browser.pause(5000)
        const settings = await $('~Settings\nTab 5 of 5')
        await settings.click()
    }
    //Card Withdrawal
    async withdrawCard(withdrawal_value) {
        await browser.pause(3000)
        const cardHome = await $('~Cards\nTab 2 of 5')
        await cardHome.click()
        await browser.pause(10000)
        const click_on_card = await $('//android.widget.ImageView[@index=1]')
        await click_on_card.click()
        await browser.pause(3000)
        const withdrawCard = await $('~Withdraw')
        await withdrawCard.click()
        await browser.pause(3000)
        const enter_Amount_to_withdraw = await $('//android.widget.EditText[@index=3]')
        await enter_Amount_to_withdraw.click()
        await enter_Amount_to_withdraw.addValue(withdrawal_value)
        await browser.pause(3000)
        const continueButton = await $('~Continue')
        await continueButton.click()
        await browser.pause(3000)
        const goToCard = await $('~Go to Card')
        await goToCard.click()
        await browser.pause(5000)
        const settings = await $('~Settings\nTab 5 of 5')
        await settings.click()
    }
    // View Card Details
    async viewCardDetails(PIN) {
        await browser.pause(3000)
        const cardHome = await $('~Cards\nTab 2 of 5')
        await cardHome.click()
        await browser.pause(10000)
        const click_on_card = await $('//android.widget.ImageView[@index=1]')
        await click_on_card.click()
        await browser.pause(3000)
        const optionsIcon = await $('.android.view.View') // class
        await optionsIcon.click()
        await browser.pause(3000)
        const viewCardDetails = await $('~View card details')
        await viewCardDetails.click()
        await browser.pause(3000)
        //enter transaction pin
        const viewcardPIN = $('.android.widget.EditText')//by class
        await viewcardPIN.setValue(PIN)
        await browser.pause(10000)
        const backIcon1 = await $('//android.widget.Button[@index=0]')
        await backIcon1.click()
        await browser.pause(3000)
        const backIcon2 = await $('//android.widget.Button[@index=0]')
        await backIcon2.click()
        await browser.pause(5000)
        const settings = await $('~Settings\nTab 5 of 5')
        await settings.click()
    }
    // Change Card PIN
    async changeCardPIN(PIN, NEW_PIN, CONFIRM_NEW_PIN) {
        await browser.pause(3000)
        const cardHome = await $('~Cards\nTab 2 of 5')
        await cardHome.click()
        await browser.pause(10000)
        const click_on_card = await $('//android.widget.ImageView[@index=1]')
        await click_on_card.click()
        await browser.pause(3000)
        // const optionIcon = await $('//android.widget.ScrollView/android.view.View[4]');
        // await optionIcon.click()
        const optionsIcon1 = await $('//android.view.View[@index=7]')
        await optionsIcon1.click()
        await browser.pause(3000)
        const changeCardPIN = await $('~Change Security PIN')
        await changeCardPIN.click()
        await browser.pause(3000)
        //enter transaction pin
        const enter_pin = $('.android.widget.EditText')//by class
        await enter_pin.setValue(PIN)
        await browser.pause(5000)
        //enter new card pin
        const enter_new_card_pin = $('.android.widget.EditText')//by class
        await enter_new_card_pin.setValue(NEW_PIN)
        await browser.pause(5000)
        //confirm new card pin
        const confirm_new_card_pin = $('.android.widget.EditText')//by class
        await confirm_new_card_pin.click()
        await confirm_new_card_pin.setValue(CONFIRM_NEW_PIN)
        await browser.pause(10000)
        await $('~Go to Card').click()
        await browser.pause(5000)
        await $('~Settings\nTab 5 of 5').click()
    }
    // Freeze Card
    async freezeCard() {
        await browser.pause(3000)
        const cardHome = await $('~Cards\nTab 2 of 5')
        await cardHome.click()
        await browser.pause(10000)
        const click_on_card = await $('//android.widget.ImageView[@index=1]')
        await click_on_card.click()
        await browser.pause(4000)
        // const optionIcon = await $('//android.widget.ScrollView/android.view.View[4]')
        // optionIcon.click()
        const optionsIcon1 = await $('//android.view.View[@index=7]')
        await optionsIcon1.click()
        await browser.pause(3000)
        const viewCardDetails = await $('//android.widget.ImageView[@content-desc="Freeze card"]')
        await viewCardDetails.click()
        await browser.pause(3000)
        const freezeCardButton = await $('//android.view.View[@index=7]')
        await freezeCardButton.click()
        await browser.pause(5000)
        const goToCard = await $('~Go to Card')
        await goToCard.click()
        await browser.pause(5000)
        const settings = await $('~Settings\nTab 5 of 5')
        await settings.click()
    }
    // Unfreeze Card
    async unfreezeCard() {
        await browser.pause(3000)
        const cardHome = await $('~Cards\nTab 2 of 5')
        await cardHome.click()
        await browser.pause(10000)
        const unfreeze = await $('~Unfreeze card')
        unfreeze.click()
        await browser.pause(5000)
        const goToCard = await $('~Go to Card')
        await goToCard.click()
        await browser.pause(5000)
        const settings = await $('~Settings\nTab 5 of 5')
        await settings.click()
    }

    // View Card Details
    async cardDeletion() {
        await browser.pause(3000)
        const cardHome = await $('~Cards\nTab 2 of 5')
        await cardHome.click()
        await browser.pause(10000)
        const click_on_card = await $('//android.widget.ImageView[@index=1]')
        await click_on_card.click()
        await browser.pause(3000)
        // const optionsIcon = await $('.android.view.View') // class
        // await optionsIcon.click()
        const optionsIcon1 = await $('//android.view.View[@index=7]')
        await optionsIcon1.click()
        await browser.pause(3000)
        const delete_card = await $('~Delete card')
        await delete_card.click()
        await browser.pause(3000)

        const deleteCard = await $('~Delete card')
        await deleteCard.click()
        await browser.pause(3000)

        const goToCard = await $('~Go to Card')
        await goToCard.click()
        const settings = await $('~Settings\nTab 5 of 5')
        await settings.click()
    }

    // Purchase Airtime
    async airtimePurchase(airtime_amount, phone_no, PIN) {
        await browser.pause(3000)
        const payBills = await $('~Pay Bills\nTab 3 of 5')
        await payBills.click()
        await browser.pause(1000)
        const buyAirtime = await $('~Buy Airtime')
        await buyAirtime.click()
        await browser.pause(5000)
        const chooseNetwork = await $('//android.widget.ImageView[@index=0]')
        await chooseNetwork.click()
        await browser.pause(3000)
        await driver.hideKeyboard()
        browser.keys('Tab')
        const enter_amount = await $('//android.widget.EditText[@index=3]')
        await enter_amount.click()
        await enter_amount.setValue(airtime_amount)
        await browser.pause(3000)
        await driver.hideKeyboard()
        await browser.keys('Tab')
        const enter_phone_number = await $('//android.widget.EditText[@index=6]')
        //await enter_phone_number.click()
        await enter_phone_number.setValue(phone_no)
        await browser.pause(3000)
        await driver.hideKeyboard()
        await browser.pause(3000)
        const conti_nue = $('~Continue')
        await conti_nue.click()
        await browser.pause(3000)
        //enter transaction pin
        const enterPIN = $('.android.widget.EditText')
        await enterPIN.click()
        await enterPIN.setValue(PIN)
        await browser.pause(3000)
        const great = $('~Great')
        await great.click()

    }

    // Purchase Data
    async dataPurchase(number, PIN) {
        await browser.pause(3000)
        const buyData = await $('~Internet/Data')
        await buyData.click()
        await browser.pause(3000)
        const chooseServiceProvider = await $('~Choose a Service Provider')
        await chooseServiceProvider.click()
        await browser.pause(3000)
        const chooseNetwork = await $('~mtn')
        await chooseNetwork.click()
        await browser.pause(3000)
        const remove_buttomsheet = await $('//android.widget.Button[@index=0]')
        await remove_buttomsheet.click()
        await browser.pause(3000)
        const choosePackage = await $('~Choose Package')
        await choosePackage.click()
        await browser.pause(3000)

        const chooseDataBundle = await $('~MTN 50 MB for ₦100')
        await chooseDataBundle.click()
        await browser.pause(3000)
        const enter_number = await $('//android.widget.EditText[@index=4]')
        await enter_number.click()
        await enter_number.setValue(number)
        await browser.pause(3000)
        const continu_e = $('~Continue')
        await continu_e.click()
        await browser.pause(3000)

        //enter transaction pin
        const enter_pin = $('.android.widget.EditText')
        await enter_pin.click()
        await enter_pin.setValue(PIN)
        await browser.pause(3000)
        const great_button = $('~Great')
        await great_button.click()

        
    }
    // Purchase Electricity
    async electricityPurchase(electricity_amount, meterNumber) {
        await browser.pause(3000)
        const buyElectricity = await $('~Electricity')
        await buyElectricity.click()
        await browser.pause(3000)
        const chooseServiceProvider = await $('~Choose a Service Provider')
        await chooseServiceProvider.click()
        await browser.pause(3000)
        const serviceProvider = await $('~E\nEnugu Disco Electricity')
        await serviceProvider.click()
        await browser.pause(3000)
        const choosePackageButton = await $('~Choose Package')
        await choosePackageButton.click()
        await browser.pause(3000)
        const choosePackage = await $('//android.view.View[@index=0]')
        await choosePackage.click()
        await browser.pause(3000)
        const enter_amount = await $('//android.widget.EditText[@index=2]')
        await enter_amount.click()
        await enter_amount.setValue(electricity_amount)
        await driver.hideKeyboard()
        await browser.keys('Tab')
        await browser.pause(3000)
        const meter_number = await $('//android.widget.EditText[@index=2]')
        await meter_number.click()
        await meter_number.setValue(meterNumber)
        await driver.hideKeyboard()
        await browser.keys('Tab')
        await browser.pause(3000)
        const continu_e = $('~Continue')
        await continu_e.click()
        await browser.pause(3000)
        //enter transaction pin
        const enter_pin = $('.android.widget.EditText')
        await enter_pin.click()
        await enter_pin.setValue(PIN)
        await browser.pause(3000)
        const great_button = $('~Great')
        await great_button.click()
        const settings = await $('~Settings\nTab 5 of 5')
        await settings.click()

    }
    // Purchase Cabkes
    async cablePurchase() {
        const buyCable = await $('~Cable')
        await buyCable.click()
    }

}


module.exports = new PageObjects();
