import { PoolappPage } from './app.po';

describe('poolapp App', function() {
  let page: PoolappPage;

  beforeEach(() => {
    page = new PoolappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
