# JAV Schema

## version 1

An jav object should contains the following properties, if no value, no here.

id {string} the unique code, lowercased
name {string} the unique code, lowercased, combine aplha-beta and numeric.
title {string} title
date {string} publish date, release date
length {integer} video length, in seconds
director {string|array(string)} director
series {string|array(string)
studio {string|array(string)}
geren {string|array(string)}
artist {string|array(string)}
coverUrl {string|array(string)}
mediaUrl {string|array(string)}
webUrl {string|array(string)} web url for watch
readme {string} markdown based text, read me

For e.g.:


```json
{
    id: "hodv-21050",
    name: "hodv-21050",
    title: "japanese porn Secret Masochist: I’m Actually a Perverted Submissive – Asahi Mizuno",
    date: '2015-03-06',
    length: 7080,
    director: 'Takuan',
    series: '',
    studio: 'h.m.p',
    geren: ["Training"],
    artist: 'Asahi Mizuno',
    coverUrl: null,
    mediaUrl: null
    webUrl: ['https://javxxx.me/movie/hodv-21050/']
    readme: ''
}
```
