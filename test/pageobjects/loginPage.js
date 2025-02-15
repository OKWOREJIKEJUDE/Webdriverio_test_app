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
        return $('~Invalid Credentials');
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

    async clearFields() {
        await this.gigtagOrEmailOrPhoneInput.click()
        await this.gigtagOrEmailOrPhoneInput.clearValue();
        await this.gigtagOrEmailOrPhoneInput.click()
        await this.passwordInput.clearValue();
    }

    async performLogout() {
        await this.settingsTab.click();
        await browser.pause(1000)
        await this.logoutButton.click();
        await browser.pause(1000)
        await this.logoutButton.click()
    }

    async verifyInvalidCredentials() {
        await expect(this.errorMessage).toBeDisplayed();
    }

    async verifyBellIconPresence() {
        await expect(this.bellIcon).toBeDisplayed();
    }
}

module.exports = new LoginPage();
