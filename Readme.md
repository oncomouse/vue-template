# Oncomouse's Vue Template

An opinionated, fully-featured Vue.js template. For use with vue-cli.

Features:

* Webpack v 4
* vue-router
	* w/ code-splitting
* Vuex (optional)
* VueTypes
* Stylesheets
	* SCSS
		* normalize-scss
	* PostCSS
		* autoprefixer
		* postcss-easings
		* css-mqpacker
		* postcss-clearfix
* Code Quality Assurance
	* ESLint
		* eslint-config-airbnb
		* plugin:vue/recommended
		* plugin:vue-types/strongly-recommended
	* StyleLint
		* Based off Airbnb's SCSS Styleguide
* Testing
	* Karma
	* Mocha
	* Chai
	* Sinon
	* fetchMock
	* @vue/test-utils

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