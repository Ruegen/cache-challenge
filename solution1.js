const getTheme = () => {
  return new Promise(res => {
    console.log('hit')
    setTimeout(() => res(100), 500)
  })

}

let cache
const getThemCache = async () => {
  if (!cache) {
    cache = await getTheme()
  }
  console.log('cache', cache)
  return cache
}

const test = async () => {
  // for (let i = 0; i < 3; i++) {
  //   await getThemCache()
  // }
  //run the cache first
  let cached = await getThemCache()
  //check if cached, then if cached don't run cache again
  if(!cached) {
    await Promise.all([1, 2, 3].map(() => getThemCache(cache))) // it should hit getTheme once, but currently it hit 3 times.
  }
}

test()