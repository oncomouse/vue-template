const { spawn } = require('child_process');

/**
 * Spawns a child process and runs the specified command
 * By default, runs in the CWD and inherits stdio
 * Options are the same as node's child_process.spawn
 * @param {string} cmd
 * @param {array<string>} args
 * @param {object} options
 */
function runCommand(cmd, args, options) {
  return new Promise((resolve, reject) => {
    const proc = spawn(
      cmd,
      args,
      Object.assign(
        {
          cwd: process.cwd(),
          stdio: 'inherit',
          shell: true,
        },
        options
      )
    );

    proc.on('exit', () => {
      resolve()
    });
  });
};

exports.installDependencies = function installDependencies(
  cwd,
  { autoInstall = 'npm', chrome },
  color
) {
  const env = Object.create(process.env);
  if(chrome) {
    env['PUPPETEER_SKIP_CHROMIUM_DOWNLOAD'] = true;
  }
  console.log(`\n\n# ${color('Installing project dependencies ...')}`);
  console.log('# ========================\n');
  return runCommand(autoInstall, ['install'], {
    cwd,
    env
  });
};
/**
 * Prints the final message with instructions of necessary next steps.
 * @param {Object} data Data from questionnaire.
 */
exports.printMessage = function printMessage(data, { green, yellow }) {
  const message = `
# ${green('Project initialization finished!')}
# ========================
To get started:
  ${yellow(
    `${data.inPlace ? '' : `cd ${data.destDirName}\n  `}${installMsg(
      data
    )}${lintMsg(data)}npm run start`
  )}
`
  console.log(message)
}

/**
 * If the user will have to run lint --fix themselves, it returns a string
 * containing the instruction for this step.
 * @param {Object} data Data from questionnaire.
 */
function lintMsg(data) {
  return '';
}

/**
 * If the user will have to run `npm install` or `yarn` themselves, it returns a string
 * containing the instruction for this step.
 * @param {Object} data Data from the questionnaire
 */
function installMsg(data) {
  return !data.autoInstall ? 'npm install (or if using yarn: yarn)\n  ' : ''
}
