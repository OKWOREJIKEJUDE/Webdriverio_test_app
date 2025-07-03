class CardPage {
    get cardCreateButton() {
        return $('~Create a virtual card');
    }
    get cardHome() {
        return $('~Cards\nTab 2 of 5');
    }
    get selectUSD() {
        return $('~$\nDollar');
    }
    get continue() {
        return $('~Continue');
    }
    get awarenessScreen() {
        return $('~Got it');
    }
    get enterCreationAmount() {
        return $('//android.widget.EditText[@index=5]');
    }
    get enterCardCreationPin() {
        return $('hjjfhjtgjhk');
    }
    get goToCard() {
        return $('~Go to Card');
    }
    get clickOnCard() {
        return $('//android.widget.ImageView[@index=1]')
    }
    get fundCardButton() {
        return $('~Fund card')
    }
    get enterFundingAmount() {
        //return $('.android.widget.EditText')
        return $('//android.widget.EditText[@index=4]')
    }
    get backIcon() {
        return $('//android.widget.Button[@index=0]')
    }
    get withdrawCardButton() {
        return $('~Withdraw')
    }
    get enterWithdrawalAmount() {
        //return $('.android.widget.EditText');
        return $('//android.widget.EditText[@index=3]')
    }
    get optionsIcon() {
        return $('//android.view.View[@index=7]')
    }
    get cardDetails() {
        return $('//android.widget.ImageView[@content-desc="Freeze card"]')
    }
    get freezeCardButton() {
        return $('//android.view.View[@index=7]')
    }
    get unfreeze() {
        return $('~Unfreeze card')
    }
    get deleteCard() {
        return $('~Delete card')
    }

    get amountInput() {
        return $('~amount_input');
    }
    get pinInput() {
        return $('~pin_input');
    }
    get confirmPinInput() {
        return $('~confirm_pin_input');
    }

    get viewCardDetailsButton() {
        return $('~view_card_details_button');
    }
    get cardPINInput() {
        return $('~card_pin_input');
    }
    get changePinButton() {
        return $('~change_pin_button');
    }
    get freeze() {
        return $('~Freeze card');
    }
    //Card Creation
    async cardCreation(CREATION_AMOUNT, CARD_CREATION_PIN, CONFIRM_CARD_CREATION_PIN) {
        try {
            await browser.pause(2000)
            await this.cardHome.click()
            await browser.pause(10000)
            await this.cardCreateButton.click()
            await browser.pause(2000)
            await this.selectUSD.click()
            await browser.pause(2000)
            await this.continue.click()
            await browser.pause(2000)
            await this.awarenessScreen.click()
            await browser.pause(2000)
            //await this.enterCreationAmount.click().setValue(CREATION_AMOUNT)
            await this.enterCreationAmount.click()
            await this.enterCreationAmount.setValue(CREATION_AMOUNT)
            await browser.pause(2000)
            await this.continue.click()
            await browser.pause(3000)
            //enter card creation pin
            //await this.enterCardCreationPin.click().setValue(CARD_CREATION_PIN)
            await this.enterCardCreationPin.setValue(CARD_CREATION_PIN)
            await browser.pause(5000)
            //confirm card creation pin
            await this.enterCardCreationPin.click()
            await this.enterCardCreationPin.setValue(CONFIRM_CARD_CREATION_PIN)
            await browser.pause(10000)
            await this.goToCard.click()
            await browser.pause(5000)
        } catch (error) {
            console.log('Card Not Created..')
        }
    }

    //Card Funding
    async fundCard(funding_value) {
        try {
            await browser.pause(3000)
            await this.cardHome.click()
            await browser.pause(10000)
            await this.clickOnCard.click()
            await browser.pause(3000)
            await this.fundCardButton.click()
            await browser.pause(2000)
            await this.enterFundingAmount.click()
            await this.enterFundingAmount.addValue(funding_value)
            await browser.pause(2000)
            await this.continue.click()
            await browser.pause(2000)
            await this.goToCard.click()
            await browser.pause(5000)
        } catch (error) {
            console.log('Card Could not be funded...')
        }
    }

    //Card Withdrawal
    async withdrawCard(withdrawal_value) {
        try {
            await browser.pause(3000)
            await this.cardHome.click()
            await browser.pause(10000)
            await this.clickOnCard.click()
            await browser.pause(3000)
            await this.withdrawCardButton.click()
            await browser.pause(3000)
            await this.enterWithdrawalAmount.click()
            await this.enterWithdrawalAmount.addValue(withdrawal_value)
            await browser.pause(3000)
            await this.continue.click()
            await browser.pause(3000)
            await this.goToCard.click()
            await browser.pause(3000)
        } catch (error) {

        }
    }

    async freezeCard() {
        try {
            await browser.pause(3000)
            await this.cardHome.click()
            await browser.pause(10000)
            await this.clickOnCard.click()
            await browser.pause(2000)
            // const optionIcon = await $('//android.widget.ScrollView/android.view.View[4]')
            // optionIcon.click()
            await this.optionsIcon.click()
            await browser.pause(2000)
            await this.freeze.click()
            await browser.pause(2000)
            await this.freezeCardButton.click()
            await browser.pause(5000)
            await this.goToCard.click()
            await browser.pause(5000)
        } catch (error) {

        }
    }

    // Unfreeze Card
    async unfreezeCard() {
        await browser.pause(3000)
        await this.cardHome.click()
        await browser.pause(10000)
        await this.unfreeze.click()
        await browser.pause(5000)
        await this.goToCard.click()
        await browser.pause(5000)
    }

    // View Card Details
    async cardDeletion() {
        await browser.pause(3000)
        await this.cardHome.click()
        await browser.pause(10000)
        await this.clickOnCard.click()
        await browser.pause(3000)
        // const optionIcon = await $('//android.widget.ScrollView/android.view.View[4]')
        // optionIcon.click()
        await this.optionsIcon.click()
        await browser.pause(3000)
        await this.deleteCard.click()
        await this.deleteCard.click()
        await this.goToCard.click()
    }

    // View Card Details
    async viewCardDetails(PIN) {
        await browser.pause(3000)
        await this.cardHome.click()
        await browser.pause(10000)
        await this.clickOnCard.click()
        await browser.pause(3000)
        // const optionIcon = await $('//android.widget.ScrollView/android.view.View[4]')
        // optionIcon.click()
        await this.optionsIcon.click()
        await browser.pause(3000)
        await cardDetails.click()
        await browser.pause(3000)
        //enter transaction pin
        const viewcardPIN = $('.android.widget.EditText')//by class
        await viewcardPIN.setValue(PIN)
        await browser.pause(10000)
        await this.backIcon.click()
        await browser.pause(3000)
        await this.backIcon.click()
        await browser.pause(5000)
    }

    async changeCardPIN(oldPin, newPin, confirmPin) {
        await this.changePinButton.click();
        await this.cardPINInput.setValue(oldPin);
        await this.pinInput.setValue(newPin);
        await this.confirmPinInput.setValue(confirmPin);
        await this.changePinButton.click();
    }

    async verifyInsufficientFunds() {
        const toastMessage = await $(`//android.widget.Toast`);
        const toastText = await toastMessage.getText();
        if (expect(toastText).to.include('Insufficient balance!')) {
            console.log("Test Passed... !!!")
        } else {
            console.log("Test Failed... X X")
        }
        await browser.pause(2000)
        await this.backIcon.click()
        await browser.pause(2000)
        await this.backIcon.click()
    }

    async verifyInvalidAmount() {
        await expect(this.invalidInput).toBeDisplayed();
        await browser.pause(2000)
        await this.backIcon.click()
        await browser.pause(2000)
        await this.backIcon.click()
    }
}

module.exports = new CardPage();
