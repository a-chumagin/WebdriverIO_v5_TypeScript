import LogInPage from 'src/pages/LogInPage'

class LogInSteps {
    
    get openPage() {
        return LogInPage.open;
    }

    get flashText() {
        return LogInPage.flash.replace("\n×","")
    }

    loginWithCredentials(username :string, password :string) {
        console.log(`-> loginWithCredentials() with: username = ${username} and password = ${password}`);
        LogInPage.username.setValue(username);
        LogInPage.password.setValue(password);
        LogInPage.submit.click();
        console.log("<- loginWithCredentials()")
    }    
}

export default new LogInSteps();