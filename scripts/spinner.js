import ora from "ora";
const spinner = ora();

export const logWithSpinner = (msg) => {
  spinner.text = msg;
  spinner.start();
};

export const successSpinner = (text) => {
  spinner.succeed(text);
};

export const failSpinner = (text) => {
  spinner.fail(text);
};

export const stopSpinner = (text) => {
  spinner.stop(text);
};
