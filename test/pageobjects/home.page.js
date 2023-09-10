class Home {
    getPageTitle(){
        return browser.getTitle()
    }
}
module.exports = new Home()