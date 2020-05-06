const pkg = require('../package.json')
const { exec } = require('child_process')
const axios = require('axios')

/**
 * supported commands
 * ```
jav play <id> : open media url with player
jav info <id> : print info
jav cover <id> : print cover urls
jav media <id> : print media urls
jav web <id> : print web urls
jav search <q> : print search result
```
 */

const cmdRoutes = {
    play,
    info,
    cover,
    media,
    web,
    search,
    help,
    version
}
const api = process.env.JAV_API
const player = process.env.JAV_PLAYER

if (module === require.main) {
    let subCmd = process.argv[2]
    let idOrQ = process.argv[3]
    main(subCmd, idOrQ)
}

async function main(subCmd, idOrQ) {
    const routed = cmdRoutes[subCmd]
    if (routed) {
        // id or q cmds
        if (idOrQ) {
            await routed(idOrQ)
        } else {
            await routed()
        }
    } else {
        help()
    }
}

async function callInfoApi(id) {
    try {
        const { data } = await axios.get(api + '?m=' + id)
        return { movie: data.movie }
    } catch (e) {
        return {
            error: e.message
        }
    }
}

async function callSearchApi(id) {
    try {
        const { data } = await axios.get(api + '?q=' + id)
        return { movies: data.movies }
    } catch (e) {
        return {
            error: e.message
        }
    }
}

async function play(id) {
    let data = await callInfoApi(id)
    if (data.error) {
        console.log(data.error)
    } else {
        let url = null
        let mediaUrl = data.movie.mediaUrl
        if (typeof mediaUrl === 'string') {
            url = mediaUrl
        } else if (typeof meidaUrl === 'object') {
            url = mediaUrl[0]
        }
        if (url) {
            exec(`${player} ${url}`)
        }
    }
}

async function info(id) {
    let data = await callInfoApi(id)
    if (data.error) {
        console.log(data.error)
    } else {
        console.log(JSON.stringify(data.movie, null, 8))
    }
}

async function cover(id) {
    let data = await callInfoApi(id)
    if (data.error) {
        console.log(data.error)
    } else {
        console.log(JSON.stringify(data.movie.coverUrl, null, 8))
    }
}

async function media(id) {
    let data = await callInfoApi(id)
    if (data.error) {
        console.log(data.error)
    } else {
        console.log(JSON.stringify(data.movie.mediaUrl, null, 8))
    }
}

async function web(id) {
    let data = await callInfoApi(id)
    if (data.error) {
        console.log(data.error)
    } else {
        console.log(JSON.stringify(data.movie.webUrl, null, 8))
    }
}

async function search(id) {
    let data = await callSearchApi(id)
    if (data.error) {
        console.log(data.error)
    } else {
        console.table(data.movies)
    }
}

function help() {
    const text = `// supported commands
// jav play <id> : open media url with player
// jav info <id> : print info
// jav cover <id> : print cover urls
// jav media <id> : print media urls
// jav web <id> : print web urls
// jav search <q> : print search result
// jav help : show help msg
// jav version: show version
`
    console.log(text)
}

function version() {
    console.log(`${pkg.name}/${pkg.version}\n${pkg.description}`)
}

if (process.env.NODE_ENV === 'test') {
    module.exports = {
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
    }
}
