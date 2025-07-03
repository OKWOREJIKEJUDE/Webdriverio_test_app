const path  = require('path')
const {config} =  require('./wdio.shared.conf')

config.port = 4723;

// config.specs = [
//     './test/specs_s/**/*.js',
// ]

config.capabilities = [{
    platformName: 'Android',
    'appium:deviceName': 'Emulator-5554',
    'appium:platformVersion': '11.0',
    'appium:automationName': 'UiAutomator2',
    "appium:app": path.join(process.cwd(), "app\\android\\base.apk"),
    //"appium:automationName": "Flutter"
}]

// config.capabilities = [{
//     platformName: 'Android',
//     'appium:deviceName': 'Android',
//     'appium:platformVersion': '9',
//     'appium:automationName': 'UiAutomator2',
//     "appium:app": path.join(process.cwd(), "app\\android\\base.apk")
// }]
exports.config = config;