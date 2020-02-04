import {expect} from 'chai';
import {config} from 'src/config';
import LogInSteps from 'src/steps/LogInSteps';

describe('Login page', () => {
    beforeEach(function() {
        LogInSteps.openPage;
    });

    it('displays message with invalid credentials', () => {
        LogInSteps.loginWithCredentials('foo', 'bar');

        expect(LogInSteps.flashText).to.eq('Your username is invalid!');
    });

    it('should allow access with correct credentials', () => {
        LogInSteps.loginWithCredentials('tomsmith', 'SuperSecretPassword!');

        expect(LogInSteps.flashText).to.eq('You logged into a secure area!');
    });

    it('using config values specified in src/config', () => {
        LogInSteps.loginWithCredentials(config.username, config.password);

        expect(LogInSteps.flashText).to.eq('You logged into a secure area!');
    })
});
