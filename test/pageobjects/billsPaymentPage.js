class BillsPayment {

    get continue() {
        return $('~Continue');
    }
    get enterAmount() {
        return $('//android.widget.EditText[@index=4]');
    }
    get enterPhoneNumber() {
        return $('//android.widget.EditText[@index=6]');
    }
    get chooseNetwork() {
        return $('//android.widget.ImageView[@index=0]');
    }
    get buyAirtime() {
        return $('~Buy Airtime');
    }
    get payBillsHome() {
        return $('~Pay Bills\nTab 3 of 5')
    }
    get enterPIN() {
        return $('.android.widget.EditText')
    }
    get great() {
        return $('~Great')
    }
    get buyData() {
        return $('~Internet/Data')
    }
    get chooseServiceProvider() {
        return $('~Choose a Service Provider')
    }
    get removeButtomsheet() {
        return $('//android.widget.Button[@index=0]')
    }
    get buyData() {
        return $('~Internet/Data')
    }




    // Purchase Airtime
    async airtimePurchase(airtime_amount, phone_no, PIN) {
        await browser.pause(3000)
        await this.payBillsHome.click()
        await browser.pause(1000)
        await this.buyAirtime.click()
        await browser.pause(5000)
        await this.chooseNetwork.click()
        await browser.pause(3000)
        // await driver.hideKeyboard()
        // browser.keys('Tab')
        await this.enterAmount.click()
        await this.enterAmount.setValue(airtime_amount)
        await browser.pause(3000)
        await driver.hideKeyboard()
        await browser.keys('Tab')
        await this.enterPhoneNumber.click()
        await this.enterPhoneNumber.setValue(phone_no)
        await browser.pause(3000)
        await driver.hideKeyboard()
        await browser.pause(3000)
        await this.continue.click()
        await browser.pause(3000)
        //enter transaction pin
        await this.enterPIN.setValue(PIN)
        await browser.pause(3000)
        await this.great.click()

    }

    // Purchase Data
    async dataPurchase(number, PIN) {
        try {
        await browser.pause(3000)
        await this.payBillsHome.click()
        await browser.pause(1000)
        await this.buyData.click()
        await browser.pause(3000)
        await this.chooseServiceProvider.click()
        await browser.pause(3000)
        const chooseNetwork = await $('~mtn')
        await chooseNetwork.click()
        await browser.pause(3000)
        await this.removeButtomsheet.click()
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
        await this.continue.click()
        await browser.pause(3000)
        //enter transaction pin
        await this.enterPIN.setValue(PIN)
        await browser.pause(3000)
        await this.great.click()
        } catch (error) {
            
        }
        
    }
}

module.exports = new BillsPayment();
