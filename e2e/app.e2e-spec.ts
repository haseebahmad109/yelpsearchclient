import { YelpsearchClientPage } from './app.po';

describe('yelpsearch-client App', () => {
  let page: YelpsearchClientPage;

  beforeEach(() => {
    page = new YelpsearchClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
