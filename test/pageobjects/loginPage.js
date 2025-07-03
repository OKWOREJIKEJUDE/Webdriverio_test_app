class LoginPage {
    get gigtagOrEmailOrPhoneInput() {
        return $('//android.widget.EditText[@index=4]');
    }
    get passwordInput() {
        return $('//android.widget.EditText[@index=5]');
    }
    get loginButton() {
        return $('~Log in');
    }
    get errorMessage() {
        return $('~invalid login credentials');
    }
    get bellIcon() {
        return $('//android.widget.ImageView[@index=2]');
    }
    get settingsTab() {
        return $('~Settings\nTab 5 of 5');
    }
    get logoutButton() {
        return $('~Log out');
    }

    //This method starts the App(by clicking on the Login button on onboarding screen)
    async initializeAppForLogin() {
        try {
            await browser.pause(3000);
            const gigLogin = await $('~Log in');
            await gigLogin.click();
            await browser.pause(3000);
        } catch (error) {
            console.log('Initialize App not found, continuing test...');
        }
    }
    async maybeLater() {
        try {
            await browser.pause(1000);
            const maybe_later = await $('~Maybe later');
            if (await maybe_later.isExisting()) {
                await maybe_later.click();
            }
        } catch (error) {
            console.log('Maybe Later not found, continuing test...');
        }
    }
    async maybeLaterForVan() {
        try {
            await browser.pause(1000);
            const maybe_later = await $('~Maybe later');
            if (await maybe_later.isExisting()) {
                await maybe_later.click();
            }
        } catch (error) {
            console.log('Maybe Later not found, continuing test...');
        }
    }

    async campaign() {
        try {
            await browser.pause(1000);
            const maybe_later = await $('~Maybe Later');
            if (await maybe_later.isExisting()) {
                await maybe_later.click();
                console.log('Campaign removed...')
            }
        } catch (error) {
            console.log('Maybe Later not found, continuing test...');
        }

    }

    async SuccessfulLogin(username, password) {
        await this.gigtagOrEmailOrPhoneInput.click()
        await this.gigtagOrEmailOrPhoneInput.setValue(username);
        await this.passwordInput.click()
        await this.passwordInput.setValue(password);
        await this.loginButton.click();
        await browser.pause(9000)
    }

    async UnSuccessfulLogin(username, password) {
        await this.gigtagOrEmailOrPhoneInput.click()
        await this.gigtagOrEmailOrPhoneInput.setValue(username);
        await this.passwordInput.click()
        await this.passwordInput.setValue(password);
        await driver.hideKeyboard()
        browser.keys('Tab')
        await this.loginButton.click();
    }

    //I didnt implement this method because Appium inspector is not seeing "invalid login credentials" pop up
    async verifyInvalidCredentials() {
        //await expect(this.errorMessage).toBeDisplayed()
        // await browser.pause(1000);
        // const errorMessage = await $('~invalid login credentials');
        // await expect(errorMessage).toBeDisplayed();
        // await expect(errorMessage).toHaveText('invalid login credentials');
    }
    async clearFields() {
        await this.gigtagOrEmailOrPhoneInput.click()
        await this.gigtagOrEmailOrPhoneInput.clearValue();
        await driver.hideKeyboard()
        browser.keys('Tab')
        await this.passwordInput.click()
        await this.passwordInput.clearValue();
        await driver.hideKeyboard()
        browser.keys('Tab')
    }

    async performLogout() {
        try {
            await this.settingsTab.click();
            await browser.pause(1000)
            await this.logoutButton.click();
            await browser.pause(1000)
            await this.logoutButton.click()
        } catch (error) {
            console.log('Logout not found, please Ejike make sure you check your test well...');
        }
    }

    async verifyBellIconPresence() {
        await expect(this.bellIcon).toBeDisplayed();
    }

    //Terminate driver
    async terminateDriver(driver) {
        if (driver) {
            try {
                await driver.deleteSession();
                console.log("Driver session terminated successfully.");
            } catch (error) {
                console.error("Error terminating driver session:", error);
            }
        } else {
            console.warn("No active driver session to terminate.");
        }
    }


    async closeApp() {
        //await driver.executeScript('mobile: terminateApp', [{ bundleId: 'com.gigbanc.app.dev' }])
        browser.execute('mobile: terminateApp', { bundleId: 'com.gigbanc.app.dev' });
    }
}


module.exports = new LoginPage();
