import { GggPage } from './app.po';

describe('ggg App', () => {
  let page: GggPage;

  beforeEach(() => {
    page = new GggPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
