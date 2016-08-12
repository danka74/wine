import { WinePage } from './app.po';

describe('wine App', function() {
  let page: WinePage;

  beforeEach(() => {
    page = new WinePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
