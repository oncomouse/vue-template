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
  },
  filters: {
    'app/store/**/*': 'vuex',
    'test/unit/specs/store/**/*': 'vuex',
  },
};
