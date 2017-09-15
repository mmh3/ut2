import { Ut2Page } from './app.po';

describe('ut2 App', () => {
  let page: Ut2Page;

  beforeEach(() => {
    page = new Ut2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
