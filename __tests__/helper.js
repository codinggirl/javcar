const helper = require('../lib/helper')

test('PRED-184 should OK', async function () {
    const carId = 'PRED-184'
    const carInfo = await helper.getCarInfo(carId)
    // {
    //     id: undefined,
    //     title: 'PRED-184文系デカ尻お姉さんがささやき騎乗位でじっくりねっとり犯してあげる 枢木あおい在线播放',
    //     publishDate: '2019-09-07',
    //     videoLength: '影片长度：120分钟',
    //     director: '导演：サッポロ太郎(さっぽろたろう)28',
    //     serial: '系列：文系お姉さんがささやき騎乗位でじっくりねっとり犯してあげる4',
    //     company: '厂商：プレミアム1620',
    //     tag: '标签：エレガンス195',
    //     type: '类型：サンプル動画157357中出·内射50705单体作品102674大屁股2666女上位22533数位马赛克26159淫语4888痴女17625',
    //     artist: '女优：枢木あおい226',
    //     coverUrl: null,
    //     videoUrl: 'https://videony.rhsj520.com/20191013/PRED-184/1500kb/hls/index.m3u8'
    //   }
    expect(carInfo).toHaveProperty('id')
    expect(carInfo).toHaveProperty('title')
    expect(carInfo).toHaveProperty('publishDate')
    expect(carInfo).toHaveProperty('videoLength')
    expect(carInfo).toHaveProperty('director')
    expect(carInfo).toHaveProperty('serial')
    expect(carInfo).toHaveProperty('company')
    expect(carInfo).toHaveProperty('tag')
    expect(carInfo).toHaveProperty('type')
    expect(carInfo).toHaveProperty('artist')
    expect(carInfo).toHaveProperty('coverUrl')
    expect(carInfo).toHaveProperty('videoUrl')
})

test('PRED--184 should work', async function () {
    const carId = 'PRED--184'
    const carInfo = await helper.getCarInfo(carId)
    // {
    //     id: undefined,
    //     title: 'PRED-184文系デカ尻お姉さんがささやき騎乗位でじっくりねっとり犯してあげる 枢木あおい在线播放',
    //     publishDate: '2019-09-07',
    //     videoLength: '影片长度：120分钟',
    //     director: '导演：サッポロ太郎(さっぽろたろう)28',
    //     serial: '系列：文系お姉さんがささやき騎乗位でじっくりねっとり犯してあげる4',
    //     company: '厂商：プレミアム1620',
    //     tag: '标签：エレガンス195',
    //     type: '类型：サンプル動画157357中出·内射50705单体作品102674大屁股2666女上位22533数位马赛克26159淫语4888痴女17625',
    //     artist: '女优：枢木あおい226',
    //     coverUrl: null,
    //     videoUrl: 'https://videony.rhsj520.com/20191013/PRED-184/1500kb/hls/index.m3u8'
    //   }
    expect(carInfo).toHaveProperty('id')
    expect(carInfo).toHaveProperty('title')
    expect(carInfo).toHaveProperty('publishDate')
    expect(carInfo).toHaveProperty('videoLength')
    expect(carInfo).toHaveProperty('director')
    expect(carInfo).toHaveProperty('serial')
    expect(carInfo).toHaveProperty('company')
    expect(carInfo).toHaveProperty('tag')
    expect(carInfo).toHaveProperty('type')
    expect(carInfo).toHaveProperty('artist')
    expect(carInfo).toHaveProperty('coverUrl')
    expect(carInfo).toHaveProperty('videoUrl')
})

test('lowercase id pred-184 should work', async function () {
    const carId = 'pred-184'
    const carInfo = await helper.getCarInfo(carId)
    // {
    //     id: undefined,
    //     title: 'PRED-184文系デカ尻お姉さんがささやき騎乗位でじっくりねっとり犯してあげる 枢木あおい在线播放',
    //     publishDate: '2019-09-07',
    //     videoLength: '影片长度：120分钟',
    //     director: '导演：サッポロ太郎(さっぽろたろう)28',
    //     serial: '系列：文系お姉さんがささやき騎乗位でじっくりねっとり犯してあげる4',
    //     company: '厂商：プレミアム1620',
    //     tag: '标签：エレガンス195',
    //     type: '类型：サンプル動画157357中出·内射50705单体作品102674大屁股2666女上位22533数位马赛克26159淫语4888痴女17625',
    //     artist: '女优：枢木あおい226',
    //     coverUrl: null,
    //     videoUrl: 'https://videony.rhsj520.com/20191013/PRED-184/1500kb/hls/index.m3u8'
    //   }
    expect(carInfo).toHaveProperty('id')
    expect(carInfo).toHaveProperty('title')
    expect(carInfo).toHaveProperty('publishDate')
    expect(carInfo).toHaveProperty('videoLength')
    expect(carInfo).toHaveProperty('director')
    expect(carInfo).toHaveProperty('serial')
    expect(carInfo).toHaveProperty('company')
    expect(carInfo).toHaveProperty('tag')
    expect(carInfo).toHaveProperty('type')
    expect(carInfo).toHaveProperty('artist')
    expect(carInfo).toHaveProperty('coverUrl')
    expect(carInfo).toHaveProperty('videoUrl')
})

test('case-mixed id pREd-184 should work', async function () {
    const carId = 'pREd-184'
    const carInfo = await helper.getCarInfo(carId)
    // {
    //     id: undefined,
    //     title: 'PRED-184文系デカ尻お姉さんがささやき騎乗位でじっくりねっとり犯してあげる 枢木あおい在线播放',
    //     publishDate: '2019-09-07',
    //     videoLength: '影片长度：120分钟',
    //     director: '导演：サッポロ太郎(さっぽろたろう)28',
    //     serial: '系列：文系お姉さんがささやき騎乗位でじっくりねっとり犯してあげる4',
    //     company: '厂商：プレミアム1620',
    //     tag: '标签：エレガンス195',
    //     type: '类型：サンプル動画157357中出·内射50705单体作品102674大屁股2666女上位22533数位马赛克26159淫语4888痴女17625',
    //     artist: '女优：枢木あおい226',
    //     coverUrl: null,
    //     videoUrl: 'https://videony.rhsj520.com/20191013/PRED-184/1500kb/hls/index.m3u8'
    //   }
    expect(carInfo).toHaveProperty('id')
    expect(carInfo).toHaveProperty('title')
    expect(carInfo).toHaveProperty('publishDate')
    expect(carInfo).toHaveProperty('videoLength')
    expect(carInfo).toHaveProperty('director')
    expect(carInfo).toHaveProperty('serial')
    expect(carInfo).toHaveProperty('company')
    expect(carInfo).toHaveProperty('tag')
    expect(carInfo).toHaveProperty('type')
    expect(carInfo).toHaveProperty('artist')
    expect(carInfo).toHaveProperty('coverUrl')
    expect(carInfo).toHaveProperty('videoUrl')
})

test('2PRED--184 should work', async function () {
    const carId = '2PRED--184'
    const carInfo = await helper.getCarInfo(carId)
    // {
    //     id: undefined,
    //     title: 'PRED-184文系デカ尻お姉さんがささやき騎乗位でじっくりねっとり犯してあげる 枢木あおい在线播放',
    //     publishDate: '2019-09-07',
    //     videoLength: '影片长度：120分钟',
    //     director: '导演：サッポロ太郎(さっぽろたろう)28',
    //     serial: '系列：文系お姉さんがささやき騎乗位でじっくりねっとり犯してあげる4',
    //     company: '厂商：プレミアム1620',
    //     tag: '标签：エレガンス195',
    //     type: '类型：サンプル動画157357中出·内射50705单体作品102674大屁股2666女上位22533数位马赛克26159淫语4888痴女17625',
    //     artist: '女优：枢木あおい226',
    //     coverUrl: null,
    //     videoUrl: 'https://videony.rhsj520.com/20191013/PRED-184/1500kb/hls/index.m3u8'
    //   }
    expect(carInfo).toHaveProperty('error')
})

test('JUKF-026 has no video yet, video url should be null', async function () {
    const carId = 'JUKF-026'
    const carInfo = await helper.getCarInfo(carId)
    // {
    //     id: undefined,
    //     title: 'PRED-184文系デカ尻お姉さんがささやき騎乗位でじっくりねっとり犯してあげる 枢木あおい在线播放',
    //     publishDate: '2019-09-07',
    //     videoLength: '影片长度：120分钟',
    //     director: '导演：サッポロ太郎(さっぽろたろう)28',
    //     serial: '系列：文系お姉さんがささやき騎乗位でじっくりねっとり犯してあげる4',
    //     company: '厂商：プレミアム1620',
    //     tag: '标签：エレガンス195',
    //     type: '类型：サンプル動画157357中出·内射50705单体作品102674大屁股2666女上位22533数位马赛克26159淫语4888痴女17625',
    //     artist: '女优：枢木あおい226',
    //     coverUrl: null,
    //     videoUrl: 'https://videony.rhsj520.com/20191013/PRED-184/1500kb/hls/index.m3u8'
    //   }
    expect(carInfo.videoUrl).toBeNull()
})
