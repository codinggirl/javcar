const { spawn } = require('child_process')
const { getCarInfo } = require('./helper')

function openVideo(url) {
    if (url) {
        spawn('mpv', [url], {
            detached: true
        })
    }
}

async function startup(carLicenseNumber) {
    const info = await getCarInfo(carLicenseNumber)
    openVideo(info.videoUrl)
    console.log(JSON.stringify(info, null, 4))
}

module.exports = {
    startup
}
