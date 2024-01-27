import ora from 'ora';

const spinner = ora();

export const logInfo = (msg) => {
  spinner.text = msg;
  spinner.start();
};

export const logSuccess = (text) => {
  spinner.succeed(text);
};

export const logFail = (text) => {
  spinner.fail(text);
};

export const logStop = (text) => {
  spinner.stop(text);
};
