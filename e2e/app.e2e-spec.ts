import { AngularGlobalPage } from './app.po';

describe('angular-global App', () => {
  let page: AngularGlobalPage;

  beforeEach(() => {
    page = new AngularGlobalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
