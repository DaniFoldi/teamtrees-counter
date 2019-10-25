const fetch = require('node-fetch')

module.exports = async () => {
  const raw = await fetch('https://teamtrees.org', {
    method: 'GET'
  })
  const data = await raw.text()
  const regex1 = /\<div id=\"totalTrees\" class\=\"counter\" data\-count\=\"\d+\">/gm
  const regex2 = /\d+/gm
  return parseInt(data.match(regex1)[0].match(regex2))
}
