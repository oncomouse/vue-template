# Oncomouse's Vue Template

An opinionated, fully-featured Vue.js template. For use with vue-cli.

Features:

* **Vue**
	* [vue-router](https://router.vuejs.org/)
		* w/ [Code Splitting](https://alexjoverm.github.io/2017/07/16/Lazy-load-in-Vue-using-Webpack-s-code-splitting/)
		* *Configured for hash routing by default*, but the development server supports history-based routing
	* [Vuex](https://vuex.vuejs.org/) (optional)
	* [VueTypes](https://github.com/dwightjack/vue-types)
* **Stylesheets**
	* [SCSS](http://sass-lang.com/)
		* [normalize-scss](https://github.com/JohnAlbin/normalize-scss)
	* [PostCSS](https://postcss.org/)
		* [autoprefixer](https://github.com/postcss/autoprefixer)
		* [postcss-easings](https://github.com/postcss/postcss-easings)
		* [css-mqpacker](https://github.com/hail2u/node-css-mqpacker)
		* [postcss-clearfix](https://github.com/seaneking/postcss-clearfix)
* **Code Quality Assurance**
	* [ESLint](https://eslint.org/)
		* [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)
		* [vue/recommended](https://github.com/vuejs/eslint-plugin-vue)
		* [vue-types/strongly-recommended](https://github.com/dwightjack/eslint-plugin-vue-types)
	* [stylelint](https://stylelint.io/)
		* [Based off Airbnb's SCSS Style Guide](https://github.com/airbnb/css)
* **Testing**
	* [Karma](http://karma-runner.github.io/2.0/index.html)
		* [karma-chrome-launcher](https://github.com/karma-runner/karma-chrome-launcher)
		* [karma-coverage](https://github.com/karma-runner/karma-coverage)
		* [karma-mocha](https://github.com/karma-runner/karma-mocha)
		* [karma-mocha-reporter](https://github.com/litixsoft/karma-mocha-reporter)
		* [karma-sourcemap-loader](https://github.com/demerzel3/karma-sourcemap-loader)
		* [karma-webpack](https://github.com/webpack-contrib/karma-webpack)
	* [Mocha](https://mochajs.org/)
	* [Chai](http://www.chaijs.com/)
		* [Chai-as Promised](https://github.com/domenic/chai-as-promised)
		* [Sinon-Chai](http://www.chaijs.com/plugins/sinon-chai/)
	* [Sinon](http://sinonjs.org/)
	* [fetchMock](http://www.wheresrhys.co.uk/fetch-mock/)
	* [@vue/test-utils](https://vue-test-utils.vuejs.org/)
* [**Webpack**](https://webpack.js.org/)
	* [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin)
		* HTML template is located at `./app/template/index.html`
	* [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin)
		* Extract static CSS files at build
	* [copy-webpack-plugin](https://github.com/webpack-contrib/copy-webpack-plugin)
		* Store static assets in `./assets`
	* [friendly-errors-webpack-plugin](https://github.com/geowarin/friendly-errors-webpack-plugin)
	* [webpack-serve](https://github.com/webpack-contrib/webpack-serve)

## Usage

~~~bash
npm i -g vue-cli
vue init oncomouse/vue-template <project name>
cd <project name>

# Start development server:
npm run start

# Build production app:
npm run build

# Run Karma/mocha/chai tests & lint CSS & JS:
npm run test
~~~