const axios = require('axios').default
const { parse } = require('node-html-parser')

function _getPageUrl(carLicenseNumber) {
    return `https://www.javzw.com/${carLicenseNumber}/`
}

async function _getPageHtml(pageUrl) {
    try {
        const { status, data: body } = await axios.get(pageUrl)
        if (status !== 200) {
            return null
        }
        return body
    } catch (e) {
        return null
    }
}

function _(fn) {
    return fn()
}

function _parseInfo(pageHtml) {
    if (!pageHtml) {
        return {
            error: 'not_found'
        }
    }
    let root = parse(pageHtml)
    let videoE = root.querySelector('.video')
    if (!videoE) {
        return {
            error: 'not_found'
        }
    }
    function __(index, replacer) {
        replacer = replacer || ''
        return (() => {
            try {
                return videoE.querySelectorAll('.list-group-item')[index].removeWhitespace().text.replace(replacer, '')
            } catch (e) {
                return null
            }
        })()
    }
    return {
        id: _(() => {

        }),
        title: _(() => {
            let title = videoE.querySelector('h3').removeWhitespace().text
            return title
        }),
        publishDate: __(1, '出版日期：'),
        videoLength: __(2),
        director: __(3),
        serial: __(4),
        company: __(5),
        tag: __(6),
        type: __(7),
        artist: __(8),
        coverUrl: __(9),
        videoUrl: _(() => {
            let player = root.querySelector('#my-player source')
            if (player) {
                return player.attributes.src
            }
            return null
        })
    }
}

async function getCarInfo(carLicenseNumber) {
    let pageUrl = _getPageUrl(carLicenseNumber)
    let pageHtml = await _getPageHtml(pageUrl)
    let infoObj = _parseInfo(pageHtml)
    return infoObj
}

module.exports = {
    getCarInfo
}
