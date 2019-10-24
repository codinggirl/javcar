#!/usr/bin/env node

const debug = require('debug')('javcar')
const car = require('./car')
const { version } = require('../package.json')

function showHelp() {
    console.log(`
        javcar (version ${version}) - Car based on JAV CN technology

        Usage:
            javcar <CAR LICENSE ID>     show car info & open car video
            javcar --help
                    -h                  show help info
            javcar --version
                    -v                  show version info

        Sample:
            javcar PRED-184

        Note:
            1. Car License ID is case-insensitive.
            2. To open the video via player, you should install mpv first,
                see <https://mpv.io> for more information.
            3. If you prefer other player, copy the video url and open with it.

        Warning:
            1. You may see ads in any video, please DO NOT trust them.
            2. Use this software as your own risk.
    `)
}

function showVersion() {
    console.log(`
        javcar (version ${version}) - Car based on JAV CN technology
    `)
}

async function main() {
    const argv2 = process.argv[2]
    if (!argv2) {
        showHelp()
        process.exit(-1)
    }
    if (argv2 === '--help' || argv2 === '-h') {
        showHelp()
        process.exit(0)
    }
    if (argv2 === '--version' || argv2 === '-v') {
        showVersion()
        process.exit(0)
    }
    const licenseNumber = argv2
    debug(`cli input license number: ${licenseNumber}`)
    await car.startup(licenseNumber)
    process.exit(0)
}

if (module.exports === module.main) {
    main()
}

if (process.env.NODE_ENV === 'test') {
    module.exports = {
        showHelp,
        showVersion,
        main
    }
}
