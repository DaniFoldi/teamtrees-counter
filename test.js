const teamtrees = require('./index');
(async () => {
  const count = await teamtrees()
  console.log(count)
})()
