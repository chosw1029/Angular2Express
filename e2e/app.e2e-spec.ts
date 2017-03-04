import { AngularExpressPage } from './app.po';

describe('angular-express App', () => {
  let page: AngularExpressPage;

  beforeEach(() => {
    page = new AngularExpressPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
