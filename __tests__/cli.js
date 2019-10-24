const cli = require('../lib/cli')

global.console = {
    log: jest.fn(),
    info: jest.fn(),
    error: jest.fn()
}

test('cli version should works', function () {
    cli.showVersion()
    expect(global.console.log).toBeCalled()
})
