# @ebay/jquery-focusable

<p>
    <a href="https://travis-ci.org/ianmcburnie/jquery-focusable"><img src="https://api.travis-ci.org/ianmcburnie/jquery-focusable.svg?branch=master" alt="Build Status" /></a>
    <a href='https://coveralls.io/github/ianmcburnie/jquery-focusable?branch=master'><img src='https://coveralls.io/repos/ianmcburnie/jquery-focusable/badge.svg?branch=master&service=github' alt='Coverage Status' /></a>
</p>

Gets all focusable descendant elements for the first element in the set of matched elements.

```js
$(collection).focusable([options]);
```

## Experimental

This plugin is still in an experimental state, until it reaches v1.0.0 you must consider all minor releases as breaking changes. Patch releases may introduce new features, but will be backwards compatible.

## Install

```js
npm install @ebay/jquery-focusable
```

## Default Options

```js
$.fn.focusable.defaults = {
    findNegativeTabindex : true,
    findPositiveTabindex : true
};
```

## Example

```js
$('body').empty().append('<button>').append('<button>');

expect($('body').focusable().length).toBe(2);
```

## Development

Run `npm start` for test driven development. All tests are located in `test.js`.

Execute `npm run` to view all available CLI scripts:

* `npm start` test driven development: watches code and re-tests after any change
* `npm test` runs tests & generates reports (see reports section below)
* `npm run lint` lints code and reports to jshint.txt
* `npm run minify` builds minified version of code
* `npm run build` cleans, lints, tests and minifies (called on `npm prepublish` hook)
* `npm run clean` deletes all generated test reports and coverage files

## Reports

Each test run will generate the following reports:

* `/test_reports/coverage` contains Istanbul code coverage report
* `/test_reports/html` contains HTML test report
* `/test_reports/junit` contains JUnit test report

## CI Build

https://travis-ci.org/ianmcburnie/jquery-focusable

## Code Coverage

https://coveralls.io/github/ianmcburnie/jquery-focusable?branch=master
