const { I } = inject();

module.exports = {
  // локаторы
  //catalogButton: locate('a.dropdown-toggle[href="/catalog/noutbuki_i_kompyutery/"]'),
  catalogHover: locate('a.dropdown-toggle[href="/catalog/"]'),
  laptopsComputersHover: locate('//*[@id="header"]/div[2]/div[2]/div/div/div/div/nav/div/table/tbody/tr/td[1]/div/div/ul/li[2]/a'),
  //<a href="/catalog/noutbuki_i_kompyutery/" title="Ноутбуки и компьютеры"><span class="name">Ноутбуки и компьютеры</span><span class="arrow"><i></i></span></a>

  laptopsButton: locate('//*[@id="header"]/div[2]/div[2]/div/div/div/div/nav/div/table/tbody/tr/td[1]/div/div/ul/li[2]/ul/li[2]/a'),
  //<a href="/catalog/noutbuki/" title="Ноутбуки"><span class="name">Ноутбуки</span></a>

  // методы
  visit () {
    I.amOnPage('https://itusluga.ru/')
  },

  submitForm () {
    I.moveCursorTo(this.catalogHover)
  },
  submitForm2 () {
    I.moveCursorTo(this.laptopsComputersHover)
  },
  submitForm3 () {
    I.click(this.laptopsButton)
  },

  openLaptops () {
    this.visit ()
    this.submitForm()
    this.submitForm2()
    this.submitForm3()
  }
}