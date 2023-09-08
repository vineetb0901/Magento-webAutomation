describe('Test Register user', ()=>{
    it('Should test if the user is able to register',async()=>{
        await browser.url('https://magento.softwaretestingboard.com/')
        await browser.pause(2000)
        await $('body > div.page-wrapper > header > div.panel.wrapper > div > ul > li:nth-child(3) > a').click()
        await browser.pause(2000)
    })

    // it.only('should test the register user with no firstname',async()=>{
    //     await browser.url('https://magento.softwaretestingboard.com/customer/account/create/')
    //     // await $('#firstname').setValue('')
    //     await $('#form-validate > div > div.primary > button').click()
    //     await browser.pause(2000)
    // })
    it.only('fill all the user details', async()=>{
        await browser.url('https://magento.softwaretestingboard.com/customer/account/create/')
        await $('#firstname').setValue('vine')
        await $('#lastname').setValue('bh')
        await $('#email_address').setValue('lobirytu@tutuapp.bid')
        await $('#password').setValue('vineet@1234')
        await $('#password-confirmation').setValue('vineet@1234')
        await $('#form-validate > div > div.primary > button > span').click()
        await browser.pause(2000)
    })
})

