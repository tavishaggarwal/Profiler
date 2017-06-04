import { MyProfilePage } from './app.po';

describe('my-profile App', () => {
  let page: MyProfilePage;

  beforeEach(() => {
    page = new MyProfilePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to profile!!'))
      .then(done, done.fail);
  });
});
