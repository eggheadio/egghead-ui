const execSync = require('child_process').execSync
const semver = require('semver')
const moduleName = 'egghead-ui'
const remoteRepo = 'git@github.com:eggheadio/egghead-ui.git' 
const packageVersion = require('../package.json').version
const npmVersion = `${execSync(`npm show ${moduleName} version`)}`
console.log('npmVersion', npmVersion)

const publish = () => {
  console.log(`Publishing ${packageVersion} to npm`)
  execSync('npm publish')

  console.log(`Adding git tag v${packageVersion} to repo`)
  execSync(`git tag v${packageVersion}`)
  execSync(`git push ${remoteRepo} master --tags`)

  console.log('Publishing complete')
}

const abort = () => {
  console.log('Aborting publish because package.json version is not new')
  process.exit(0)
}

console.log(`Library version in package.json: ${packageVersion}`)
console.log(`Library version on npm: ${npmVersion}`)
const hasVersionBeenUpdated = semver.gt(packageVersion, npmVersion)
hasVersionBeenUpdated
  ? publish()
  : abort()
