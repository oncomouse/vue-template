# {{app_name}}

Basic app structure:

~~~
app – Contains your application
└──api – Mocked up API for https://jsonplaceholder.typicode.com/
├──components – Vue components
├──pages – Top-level, routed components
├──router – vue-router configuration
├──store – Vuex store (optional)
|  └──modules – Vuex modules (optional)
├──template – Html Webpack Template
assets – Static assets
tests – Location of tests
├──fixtures – Any JSON data
├──unit
   └──specs – Put Karma tests here
~~~