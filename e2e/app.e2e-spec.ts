import { CloudFormsPage } from './app.po';

describe('cloud-forms App', () => {
  let page: CloudFormsPage;

  beforeEach(() => {
    page = new CloudFormsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
