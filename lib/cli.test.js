const pkg = require('../package.json')
const {
    cmdRoutes,
    api,
    player,
    main,
    callInfoApi,
    callSearchApi,
    play,
    info,
    cover,
    media,
    web,
    search,
    help,
    version
} = require('./cli')

test('define', () => {
    expect(cmdRoutes).toBeDefined()
    expect(api).not.toBeDefined()
    expect(player).not.toBeDefined()
    expect(main).toBeDefined()
    expect(callInfoApi).toBeDefined()
    expect(callSearchApi).toBeDefined()
    expect(play).toBeDefined()
    expect(info).toBeDefined()
    expect(cover).toBeDefined()
    expect(media).toBeDefined()
    expect(web).toBeDefined()
    expect(search).toBeDefined()
    expect(help).toBeDefined()
    expect(version).toBeDefined()
})

test('types', () => {
    expect(typeof cmdRoutes).toEqual('object')
    expect(typeof api).toEqual('undefined')
    expect(typeof player).toEqual('undefined')
    expect(typeof main).toEqual('function')
    expect(typeof callInfoApi).toEqual('function')
    expect(typeof callSearchApi).toEqual('function')
    expect(typeof play).toEqual('function')
    expect(typeof info).toEqual('function')
    expect(typeof cover).toEqual('function')
    expect(typeof media).toEqual('function')
    expect(typeof web).toEqual('function')
    expect(typeof search).toEqual('function')
    expect(typeof help).toEqual('function')
    expect(typeof version).toEqual('function')
})

test('test play', async () => {
    process.env.JAV_API = null
    const subCmd = 'play'
    const id = null
    global.console.log = jest.fn()
    await main(subCmd, id)
    expect(console.log).toBeCalled()
})

test('test info', async () => {
    process.env.JAV_API = null
    const subCmd = 'info'
    const id = null
    global.console.log = jest.fn()
    await main(subCmd, id)
    expect(console.log).toBeCalled()
})

test('test cover', async () => {
    process.env.JAV_API = null
    const subCmd = 'cover'
    const id = null
    global.console.log = jest.fn()
    await main(subCmd, id)
    expect(console.log).toBeCalled()
})

test('test media', async () => {
    process.env.JAV_API = null
    const subCmd = 'media'
    const id = null
    global.console.log = jest.fn()
    await main(subCmd, id)
    expect(console.log).toBeCalled()
})

test('test search', async () => {
    process.env.JAV_API = null
    const subCmd = 'search'
    const q = null
    global.console.log = jest.fn()
    await main(subCmd, q)
    expect(console.log).toBeCalled()
})

test('test help', async () => {
    process.env.JAV_API = null
    const subCmd = null
    const id = null
    global.console.log = jest.fn()
    await main(subCmd, id)
    expect(console.log).toBeCalled()
})

test('test version', async () => {
    process.env.JAV_API = null
    const subCmd = 'version'
    const id = null
    global.console.log = jest.fn().mockImplementation((v) => {
        expect(v).toEqual(`${pkg.name}/${pkg.version}\n${pkg.description}`)
    })
    await main(subCmd, id)
    expect(console.log).toBeCalled()
})
