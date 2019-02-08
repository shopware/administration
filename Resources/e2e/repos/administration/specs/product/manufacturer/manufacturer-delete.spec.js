const manufacturerPage = require('administration/page-objects/module/sw-manufacturer.page-object.js');

module.exports = {
    '@tags': ['product', 'manufacturer-delete', 'manufacturer', 'delete'],
    before: (browser, done) => {
        global.AdminFixtureService.create('product-manufacturer').then(() => {
            done();
        });
    },
    'navigate to manufacturer module': (browser) => {
        browser
            .openMainMenuEntry({
                mainMenuPath: '#/sw/product/index',
                menuTitle: 'Product',
                index: 1,
                subMenuItemPath: '#/sw/manufacturer/index',
                subMenuTitle: 'Manufacturer'
            });
    },
    'check if new manufacturer exists in overview': (browser) => {
        const page = manufacturerPage(browser);

        browser
            .waitForElementPresent(`${page.elements.gridRow}--0`)
            .assert.urlContains('#/sw/manufacturer/index')
            .expect.element(`${page.elements.gridRow}--0`).to.have.text.that.equals(global.AdminFixtureService.basicFixture.name);
    },
    'verify manufacturer details': (browser) => {
        const page = manufacturerPage(browser);

        browser
            .waitForElementPresent('.sw-sidebar__navigation .sw-sidebar-navigation-item')
            .click('.sw-sidebar__navigation .sw-sidebar-navigation-item')
            .waitForElementVisible(`${page.elements.gridRow}--0 ${page.elements.contextMenuButton}`)
            .click(`${page.elements.gridRow}--0 ${page.elements.contextMenuButton}`)
            .waitForElementVisible(page.elements.contextMenu)
            .click(`${page.elements.contextMenu} .sw-context-menu-item__text`)
            .waitForElementNotPresent(page.elements.loader)
            .expect.element(page.elements.smartBarHeader).to.have.text.that.equals(global.AdminFixtureService.basicFixture.name).after(500);
    },
    'enter manufacturer logo': (browser) => {
        const page = manufacturerPage(browser);
        page.addManufacturerLogo(`${process.env.APP_URL}/bundles/administration/static/fixtures/sw-login-background.png`);
    },
    'delete manufacturer': (browser) => {
        browser
            .openMainMenuEntry({
                mainMenuPath: '#/sw/product/index',
                menuTitle: 'Products',
                index: 1,
                subMenuItemPath: '#/sw/manufacturer/index',
                subMenuTitle: 'Manufacturer'
            });

        const page = manufacturerPage(browser);
        page.deleteManufacturer(global.AdminFixtureService.basicFixture.name);

        browser
            .waitForElementVisible('.sw-sidebar__navigation .sw-sidebar-navigation-item')
            .click('.sw-sidebar__navigation .sw-sidebar-navigation-item')
            .waitForElementNotPresent(page.elements.loader)
            .expect.element(`${page.elements.gridRow}--0`).to.have.text.that.equals('shopware AG');

        browser.expect.element('.sw-page__smart-bar-amount').to.have.text.that.equals('(1)');
    },
    after: (browser) => {
        browser.end();
    }
};
