const { spawn } = require('child_process')
const download = require('download-git-repo')
const fs = require('fs-extra')
const glob = require('glob')
const {
  logWithSpinner,
  successSpinner,
  failSpinner,
  stopSpinner
} = require('./spinner')

const codePath = '.tmp/vant-gh-pages'
const publicPath = 'public/vant-gh-pages/v3'

async function pathExists() {
  logWithSpinner(`check ${publicPath} is exists?`)
  const exists = await fs.pathExists(`${publicPath}`)
  if (exists) {
    successSpinner(`${publicPath} is exists`)
  } else {
    failSpinner(`${publicPath} no exists`)
  }
  return exists
}

function downloadCode() {
  logWithSpinner(`download vant-gh-pages`)
  return new Promise((resolve, reject) => {
    download('youzan/vant#gh-pages', codePath, function (err) {
      if (err) {
        failSpinner('download failed')
        stopSpinner()
        reject()
      } else {
        successSpinner('download success')
        resolve()
      }
    })
  })
}

async function copyFile() {
  logWithSpinner(`handle copy file`)
  await fs.copy(`${codePath}/v3`, `${publicPath}`)
  successSpinner(`copy file completed`)
}

function match() {
  logWithSpinner(`handle move file`)
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
        successSpinner(`move file completed`)
        return resolve()
      } catch (e) {
        failSpinner('move file failed')
        stopSpinner()
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
