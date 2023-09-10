class productPage{
    get searchInput(){
        return $('#search')
    }
    get searchResult(){
        return $('#maincontent > div.page-title-wrapper > h1 > span')
    }
}
module.exports = new productPage()