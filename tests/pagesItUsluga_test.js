/// <reference types='codeceptjs' />
const config = require('../framework/config/config.js');
const expect = require('chai').expect;

Feature('Функциональное тестирование');

Scenario('Регистрация с неверным паролем',  async ({ I, loginPage }) => {
    loginPage.login(config.credentials.user)
    await expect(await loginPage.getPasswordError()).to.be.equal('Пользователь с таким логином и паролем не найден')
    //Альтернатива
    //I.see('Пользователь с таким логином и паролем не найден')
});

Scenario('Открытие страницы с ноутбуками',  async ({ I, homePage }) => {
    homePage.openLaptops()
    I.see('Ноутбуки')
});

Scenario('Добавление товара в корзину',  async ({ I, noutbukiPage}) => {
    noutbukiPage.addBasket()
    I.see('Корзина')
});

Scenario('Ввод неверного промокода',  async ({ I, basketPage, noutbukiPage }) => {
    noutbukiPage.addBasket()

    basketPage.incorrectPromo(config.credentials.user)
    I.see(`${config.credentials.user.promoCode} не найден`)
});

Scenario('Поиск товара',  async ({ I, homePage, searchElement}) => {
    homePage.visit()

    searchElement.searchItem(config.credentials.user)
    I.saveElementScreenshot('#bx_3966226736_825', 'debug.png')
});
