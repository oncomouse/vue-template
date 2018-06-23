const { printMessage, installDependencies } = require ('./utils');

module.exports = {
  prompts: {
    name: {
      type: 'string',
      required: true,
      label: 'Project name',
    },
    author: {
      type: 'string',
      message: 'Author',
    },
    description: {
      type: 'string',
      label: 'Project description',
      default: 'A Vue.js application',
    },
    app_name: {
      type: 'string',
      required: true,
      label: 'Application Title',
      default: 'My Vue App',
    },
    homepage: {
      type: 'string',
      required: true,
      label: 'Deployment URL',
      default: 'https://oncomouse.github.io/vue-app',
    },
    vuex: {
      type: 'confirm',
      message: 'Install Vuex (state manager)?',
    },
    autoInstall: {
      type: 'list',
      message: 'Should we run `npm install` for you after the project has been created? (recommended)',
      choices: [
        {
          name: 'Yes, use NPM',
          value: 'npm',
          short: 'npm',
        },
        {
          name: 'Yes, use Yarn',
          value: 'yarn',
          short: 'yarn',
        },
        {
          name: 'No, I will handle that myself',
          value: false,
          short: 'no',
        },
      ],
    },
  },
  filters: {
    'app/store/**/*': 'vuex',
    'test/unit/specs/store/**/*': 'vuex',
  },
  complete: (data, { chalk }) => {
    const { green } = chalk;

    const cwd = path.join(process.cwd(), data.inPlace ? '' : data.destDirName);

    if (data.autoInstall) {
      installDependencies(cwd, data.autoInstall, green)
        /*.then(() => {
          return runLintFix(cwd, data, green)
        })*/
        .then(() => {
          printMessage(data, chalk);
        })
        .catch(e => {
          console.log(chalk.red('Error:'), e);
        })
    } else {
      printMessage(data, chalk);
    }
  },
};
