import { ClientViewPage } from './app.po';

describe('client-view App', () => {
  let page: ClientViewPage;

  beforeEach(() => {
    page = new ClientViewPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
