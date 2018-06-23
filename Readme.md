# Oncomouse's Vue Template

An opinionated, fully-featured Vue.js template. For use with vue-cli.

Features:

* [vue-router](https://router.vuejs.org/)
	* w/ [Code Splitting](https://alexjoverm.github.io/2017/07/16/Lazy-load-in-Vue-using-Webpack-s-code-splitting/)
	* *Configured for hash routing by default*, but the development server supports history-based routing
* [Vuex](https://vuex.vuejs.org/) (optional)
* [VueTypes](/dwightjack/vue-types)
* Stylesheets
	* [SCSS](http://sass-lang.com/)
		* [normalize-scss](/JohnAlbin/normalize-scss)
	* [PostCSS](https://postcss.org/)
		* [autoprefixer](/postcss/autoprefixer)
		* [postcss-easings](/postcss/postcss-easings)
		* [css-mqpacker](/hail2u/node-css-mqpacker)
		* [postcss-clearfix](/seaneking/postcss-clearfix)
* Code Quality Assurance
	* [ESLint](https://eslint.org/)
		* [eslint-config-airbnb](/airbnb/javascript/tree/master/packages/eslint-config-airbnb)
		* [vue/recommended](/vuejs/eslint-plugin-vue)
		* [vue-types/strongly-recommended](/dwightjack/eslint-plugin-vue-types)
	* [stylelint](https://stylelint.io/)
		* [Based off Airbnb's SCSS Style Guide](/airbnb/css)
* Testing
	* [Karma](http://karma-runner.github.io/2.0/index.html)
		* [karma-chrome-launcher](/karma-runner/karma-chrome-launcher)
		* [karma-coverage](/karma-runner/karma-coverage)
		* [karma-mocha](/karma-runner/karma-mocha)
		* [karma-mocha-reporter](/litixsoft/karma-mocha-reporter)
		* [karma-sourcemap-loader](/demerzel3/karma-sourcemap-loader)
		* [karma-webpack](/webpack-contrib/karma-webpack)
	* [Mocha](https://mochajs.org/)
	* [Chai](http://www.chaijs.com/)
		* [Chai-as Promised](/domenic/chai-as-promised)
		* [Sinon-Chai](http://www.chaijs.com/plugins/sinon-chai/)
	* [Sinon](http://sinonjs.org/)
	* [fetchMock](http://www.wheresrhys.co.uk/fetch-mock/)
	* [@vue/test-utils](https://vue-test-utils.vuejs.org/)
* [Webpack](https://webpack.js.org/)
	* [html-webpack-plugin](/jantimon/html-webpack-plugin)
		* HTML template is located at `./app/template/index.html`
	* [mini-css-extract-plugin](/webpack-contrib/mini-css-extract-plugin)
		* Extract static CSS files at build
	* [copy-webpack-plugin](/webpack-contrib/copy-webpack-plugin)
		* Store static assets in `./assets`
	* [friendly-errors-webpack-plugin](/geowarin/friendly-errors-webpack-plugin)
	* [webpack-serve](/webpack-contrib/webpack-serve)

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