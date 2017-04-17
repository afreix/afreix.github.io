import { AfreixPage } from './app.po';

describe('afreix App', () => {
  let page: AfreixPage;

  beforeEach(() => {
    page = new AfreixPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
