const { I } = inject();

module.exports = {
  // локаторы
  fields: {
    promoCode: '//*[@id="basket-root"]/div[2]/div[2]/div/div/div/div/div[1]/div[3]/div/div/div/input'
  },
applyPromocodeButton: locate('//*[@id="basket-root"]/div[2]/div[2]/div/div/div/div/div[1]/div[3]/div/div/div/span'),
errors: {
    incorrectPromocode: '.basket-coupon-text',
  },

  // методы
  visit () {
    I.amOnPage('https://itusluga.ru/basket/')
  },

  fillPromocode (promoCode) {
    I.fillField(this.fields.promoCode, promoCode)
  },
  submitApplyPromocode () {
    I.click(this.applyPromocodeButton)
  },
  async gettingErrorPromocodeNotFound () {
    return await I.grabTextFrom(this.errors.incorrectPromocode)
  },

  incorrectPromo ({promoCode}) {
    this.fillPromocode(promoCode)
    this.submitApplyPromocode()
  }
}