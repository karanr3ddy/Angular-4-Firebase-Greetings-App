import { FriendshipDayAppPage } from './app.po';

describe('friendship-day-app App', () => {
  let page: FriendshipDayAppPage;

  beforeEach(() => {
    page = new FriendshipDayAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
