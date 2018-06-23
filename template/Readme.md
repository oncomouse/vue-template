# {{app_name}}

Basic app structure:

~~~
app
├── App.vue
├── _variables.scss
├── api
│   ├── Post.js
│   ├── config.js
│   └── utilities
│       ├── checkStatus.js
│       └── request.js
├── components
│   ├── Button.vue
│   └── SampleView.vue
├── global.scss
├── index.js
├── pages
│   └── Home.vue
├── router
│   └── index.js
├── store
│   ├── index.js
│   └── modules
│       ├── index.js
│       └── samples.js
└── template
    └── index.html
assets
└── favicon.ico
package.json
scripts
└── build.js
stylelint.config.js
test
├── fixtures
│   └── post.json
└── unit
    ├── coverage
    │   ├── lcov-report
    │   │   ├── app
    │   │   │   ├── App.vue.html
    │   │   │   ├── api
    │   │   │   │   ├── Post.js.html
    │   │   │   │   ├── config.js.html
    │   │   │   │   ├── index.html
    │   │   │   │   └── utilities
    │   │   │   │       ├── checkStatus.js.html
    │   │   │   │       ├── index.html
    │   │   │   │       └── request.js.html
    │   │   │   ├── components
    │   │   │   │   ├── Button.vue.html
    │   │   │   │   ├── SampleView.vue.html
    │   │   │   │   └── index.html
    │   │   │   ├── index.html
    │   │   │   ├── index.js.html
    │   │   │   ├── pages
    │   │   │   │   ├── Home.vue.html
    │   │   │   │   └── index.html
    │   │   │   ├── router
    │   │   │   │   ├── index.html
    │   │   │   │   └── index.js.html
    │   │   │   └── store
    │   │   │       ├── index.html
    │   │   │       ├── index.js.html
    │   │   │       └── modules
    │   │   │           ├── index.html
    │   │   │           ├── index.js.html
    │   │   │           └── samples.js.html
    │   │   ├── base.css
    │   │   ├── index.html
    │   │   ├── prettify.css
    │   │   ├── prettify.js
    │   │   ├── sort-arrow-sprite.png
    │   │   ├── sorter.js
    │   │   └── test
    │   │       └── unit
    │   │           ├── index.html
    │   │           └── setup.js.html
    │   └── lcov.info
    ├── karma.conf.js
    ├── setup.js
    └── specs
        ├── components
        │   ├── Button.spec.js
        │   └── SampleView.spec.js
        ├── pages
        │   └── Home.spec.js
        └── store
            └── modules
                └── samples.spec.js
webpack.config.js
~~~