import { MISPage } from './app.po';

describe('mis App', () => {
  let page: MISPage;

  beforeEach(() => {
    page = new MISPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
