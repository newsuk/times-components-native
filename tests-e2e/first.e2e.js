describe("Example", () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it("should check that all tabs are in place", async () => {
    const P6D_SELECTOR_TAB_ICON = by.id("P6D_TAB_ICON_ID");
    const P6D_SELECTOR_VIEW_TITLE = by.label("Past Six Days Placeholder");
    const MY_ARTICLES_SELECTOR_TAB_ICON = by.id("MY_ARTICLES_TAB_ICON_ID");
    const MY_ARTICLES_SELECTOR_VIEW_TITLE = by.label("My Articles Placeholder");
    const MORE_SELECTOR_TAB_ICON = by.id("MORE_TAB_ICON_ID");
    const MORE_SELECTOR_VIEW_TITLE = by.label("More Placeholder");

    await expect(element(P6D_SELECTOR_TAB_ICON)).toBeVisible();
    await expect(element(MY_ARTICLES_SELECTOR_TAB_ICON)).toBeVisible();
    await expect(element(MORE_SELECTOR_TAB_ICON)).toBeVisible();

    await expect(element(P6D_SELECTOR_VIEW_TITLE)).not.toBeVisible();
    await element(P6D_SELECTOR_TAB_ICON).tap();
    await expect(element(P6D_SELECTOR_VIEW_TITLE)).toBeVisible();

    await expect(element(MY_ARTICLES_SELECTOR_VIEW_TITLE)).not.toBeVisible();
    await element(MY_ARTICLES_SELECTOR_TAB_ICON).tap();
    await expect(element(MY_ARTICLES_SELECTOR_VIEW_TITLE)).toBeVisible();

    await expect(element(MORE_SELECTOR_VIEW_TITLE)).not.toBeVisible();
    await element(MORE_SELECTOR_TAB_ICON).tap();
    await expect(element(MORE_SELECTOR_VIEW_TITLE)).toBeVisible();
  });
});
