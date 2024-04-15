const config = require('../framework/config/config.js')
const expect = require('chai').expect;

Feature('Задачи')

Before(({ loginPage }) => {
    loginPage.login(config.credentials.user)
})

Scenario('Чтение задачи', async ({ I, taskPage }) => {
    taskPage.visit(33)
    pause({ taskPage });
    taskPage.hasTitle('teet')
    await expect(await taskPage.getTitle()).to.be.equal('teet')
})