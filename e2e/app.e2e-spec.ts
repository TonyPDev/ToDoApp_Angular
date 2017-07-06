import { LocaltodoNgPage } from './app.po';

describe('localtodo-ng App', () => {
  let page: LocaltodoNgPage;

  beforeEach(() => {
    page = new LocaltodoNgPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
