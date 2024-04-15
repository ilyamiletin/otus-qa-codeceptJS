const { I } = inject();

module.exports = {
  // локаторы
 itemHuaweiHover: locate('#bx_3966226736_728'),
 quickViewButton: locate('//*[@id="bx_3966226736_728"]/div/div[1]/div[2]'),
 addBasketButton: locate('//*[@id="bx_117848907_728f_basket_actions"]/span[1]'),
 closeWindowQuickViewButton: locate('.close'),
 itemBasketHover: locate('//*[@id="header"]/div[2]/div[1]/div/div/div/div[3]/span[3]'),
 moveInBasketButton: locate('//*[@id="basket_form"]/ul/li/div[1]/div[3]/div/a'),

  // методы
  visit () {
    I.amOnPage('https://itusluga.ru/catalog/noutbuki/')
  },

  hoverItemHuawei () {
    I.moveCursorTo(this.itemHuaweiHover)
  },
  submitQuickView () {
    I.click(this.quickViewButton)
  },
  submitAddBasket () {
    I.click(this.addBasketButton)
  },
  submitCloseWindowQuickView () {
    I.click(this.closeWindowQuickViewButton)
  },
  hoverItemBasket () {
    I.moveCursorTo(this.itemBasketHover)
  },
  submitMoveInBasket () {
    I.click(this.moveInBasketButton)
  },

  addBasket () {
    this.visit ()
    this.hoverItemHuawei()
    this.submitQuickView()
    this.submitAddBasket()
    this.submitCloseWindowQuickView()
    this.hoverItemBasket()
    this.submitMoveInBasket()
  }
}