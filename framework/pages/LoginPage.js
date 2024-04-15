const { I } = inject();

module.exports = {
  // локаторы
  fields: {
    telephone: '#phone',
    telephoneContinue: '#phone',
    password: '#login-form_password'
  },
  submitButton: locate('#loginModalBtn'),
  errors: {
    password: '.ant-notification-notice-description',
  },

  // методы
  visit () {
    I.amOnPage('https://sb.itusluga.ru/signin')
  },

  fillTelephone (telephone) {
    I.fillField(this.fields.telephone, telephone)
  },
  fillPassword (password) {
    I.fillField(this.fields.password, password)
  },
  submitForm () {
    I.click(this.submitButton)
  },
  submitTel () {
    I.click(this.fields.telephoneContinue)
  },
  async getPasswordError () {
    return await I.grabTextFrom(this.errors.password)
  },
  
  login ({ telephone, password, telephoneContinue }) {
    this.visit()
    this.fillTelephone(telephone)
    this.submitTel()
    this.fillTelephone(telephoneContinue)
    this.fillPassword(password)
    this.submitForm()
  }
}
