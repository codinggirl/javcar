# javcar

A fast old-driver cli tool for car info mining, with your own bring car api.

[![Build Status](https://travis-ci.com/codinggirl/javcar.svg?branch=master)](https://travis-ci.com/codinggirl/javcar)
[![codecov](https://codecov.io/gh/codinggirl/javcar/branch/master/graph/badge.svg)](https://codecov.io/gh/codinggirl/javcar)

BREAKING CHANGE:

From version 3, this cli use an backend api, you should have a api before using.

## Usage

```
# install (just once)
$ npm install <git repo url>

# run it (every time you want to use)
$ javcar info <CAR LICENSE ID>

# run `javcar help` for more information.
```

## Development

```
# fetch the source
$ git clone <GIT URL>

# install deps
$ npm install

# make a command link for this repo (only need once)
$ npm link

# start a develop test
$ npm start

# run the command line
$ javcar info <CAR LICENSE ID>

# run `javcar help` for more information.
```

## License

[The MIT License](LICENSE).
