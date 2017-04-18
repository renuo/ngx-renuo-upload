describe('App', () => {
  beforeEach(() => {
    browser.get('/');
  });

  it('should have a title', () => {
    const subject = browser.getTitle();
    expect(subject).toEqual('ng2 Renuo Upload');
  });
});
