import {expect} from 'chai';
import {imagePath} from 'src/assets';
import FileUploadPage from 'src/pages/FileUploadPage';

describe('File upload', () => {
    it('works', () => {
        const imageName = 'webdriverIO.png';
        const filePath = imagePath(imageName);
        const remoteFilePath = browser.uploadFile(filePath);

        FileUploadPage.open;
        FileUploadPage.chooseFile(remoteFilePath);
        FileUploadPage.upload;

        expect(FileUploadPage.uploadedFiles).to.eq(imageName);
    });
});
