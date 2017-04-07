import { GuildPage } from './app.po';

describe('guild App', () => {
  let page: GuildPage;

  beforeEach(() => {
    page = new GuildPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
