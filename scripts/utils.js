const { spawn } = require('child_process')
const download = require('download-git-repo')
const fs = require('fs-extra')
const glob = require('glob')

const codePath = '.tmp/vant-gh-pages'
const publicPath = 'public/vant-gh-pages/v3'

function pathExists() {
  return fs.pathExists(`${publicPath}`)
}

function downloadCode() {
  return new Promise((resolve, reject) => {
    download('youzan/vant#gh-pages', codePath, function (err) {
      if (err) {
        console.log('download failed')
        reject()
      } else {
        console.log('download success')
        resolve()
      }
    })
  })
}

function copyFile() {
  return fs.copy(`${codePath}/v3`, `${publicPath}`)
}

function match() {
  return new Promise((resolve, reject) => {
    glob(`${publicPath}/*(chunks*|site-mobile*).js`, function (err, files) {
      try {
        if (err) {
          throw err
        }
        files.forEach(async file => {
          const target = file.split(publicPath)[1].split('.')[0]
          await fs.rename(file, `${publicPath}/${target}.js`)
        })
        return resolve()
      } catch (e) {
        return reject(e)
      }
    })
  })
}

function runServe() {
  spawn('npx', ['vue-cli-service serve'], { stdio: 'inherit', shell: true })
}

function runBuild() {
  spawn('npx', ['vue-cli-service build'], { stdio: 'inherit', shell: true })
}

module.exports = {
  pathExists,
  downloadCode,
  copyFile,
  match,
  runServe,
  runBuild
}
