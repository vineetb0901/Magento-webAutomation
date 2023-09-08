describe('Test Register user', ()=>{
    it('Should test if the user is able to register',async()=>{
        await browser.url('https://magento.softwaretestingboard.com/')
        await $('body > div.page-wrapper > header > div.panel.wrapper > div > ul > li:nth-child(3) > a').click()
        await browser.pause(2000)
    })
})
