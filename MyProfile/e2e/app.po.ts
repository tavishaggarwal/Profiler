import { browser, by, element } from 'protractor';

export class MyProfilePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('profile-root h1')).getText();
  }
}
