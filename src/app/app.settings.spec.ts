import { AppSettings } from './app.settings';

describe('AppSettings', () => {
  let appSettings: AppSettings;

  beforeEach(() => {
    appSettings = new AppSettings();
  });

  it('is defined', () => {
    expect(appSettings).toBeDefined();
  });
});
