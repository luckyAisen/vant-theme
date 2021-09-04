const ora = require('ora')
const spinner = ora()

exports.logWithSpinner = msg => {
  spinner.text = msg
  spinner.start()
}

exports.successSpinner = (text) => {
  spinner.succeed(text)
}

exports.failSpinner = (text) => {
  spinner.fail(text)
}

exports.stopSpinner = (text) => {
  spinner.stop(text)
}