const execSync = require('child_process').execSync
const writeFileSync = require('fs').writeFileSync
const semver = require('semver')
const repoName = process.argv[2]
const npmToken = process.argv[3]
const packageVersion = require('../package.json').version
const npmVersion = `${execSync(`npm show ${repoName} version`)}`
console.log('npmVersion', npmVersion)

const publish = () => {
  console.log(`Adding git tag v${packageVersion} to repo`)
  execSync('git fetch --unshallow || true')
  execSync(`git tag v${packageVersion}`)
  execSync(`git push git@github.com:${repoName}.git --tags`)

  console.log(`Publishing ${packageVersion} to npm`)
  writeFileSync('.npmrc', `//registry.npmjs.org/:_authToken=${npmToken}\n`)
  execSync('npm publish')

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
