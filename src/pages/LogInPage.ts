import BasePage from 'src/pages/BasePage';

class LoginPage extends BasePage {

    get username() {
        return $('#username');
    }

    get password() {
        return $('#password');
    }

    get submit() {
        return $('#login > button');
    }

    get flash() {
        return $('#flash').getText();
    }

    get open() {
        return browser.url('/login');
    }

    loginWithCredentials(username :string, password :string) {
        console.log(`-> loginWithCredentials() with: username = ${username} and password = ${password}`);
        this.username.setValue(username);
        this.password.setValue(password);
        this.submit.click();
        console.log("<- loginWithCredentials()")
    }
}

export default new LoginPage();
