const { I } = inject();

module.exports = {
  // локаторы
  fields: {
    searchInput: '#title-search-input_fixed'
  },
  searchButton: locate('//*[@id="title-search_fixed"]/form/div[2]/button'),

  // методы
  fillProduct (searchInput) {
    I.fillField(this.fields.searchInput, searchInput)
  },
  submitSearch () {
    I.click(this.searchButton)
  },

  searchItem ({searchInput}) {
    this.fillProduct(searchInput)
    this.submitSearch()
  }
}