const getTheme = () => {
  return new Promise(res => {
    console.log('hit')
    setTimeout(() => res(100), 500)
  })
}

let cache

const getThemCache = async () => {
  return new Promise((resolve)  => {
      if (!cache) {
        cache = getTheme()
        resolve(cache)
        console.log('cache', cache)
      }
        resolve(cache)
  })
}

const test = async () => {
  // for (let i = 0; i < 3; i++) {
  //   await getThemCache()
  // }
  // have each getThemeCache run but set cache only once   
  await Promise.all([1, 2, 3].map(() => getThemCache())) // it should hit getTheme once, but currently it hit 3 times.
  // cache is set as promise 
  console.log(await cache)
}

test(cache)


