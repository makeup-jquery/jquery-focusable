# jquery-focusable

<p>
    <a href="https://travis-ci.org/ianmcburnie/jquery-focusable"><img src="https://api.travis-ci.org/ianmcburnie/jquery-focusable.svg?branch=master" alt="Build Status" /></a>
    <a href='https://coveralls.io/github/ianmcburnie/jquery-focusable?branch=master'><img src='https://coveralls.io/repos/ianmcburnie/jquery-focusable/badge.svg?branch=master&service=github' alt='Coverage Status' /></a>
    <a href="https://david-dm.org/ianmcburnie/jquery-focusable"><img src="https://david-dm.org/ianmcburnie/jquery-focusable.svg" alt="Dependency status" /></a>
    <a href="https://david-dm.org/ianmcburnie/jquery-focusable#info=devDependencies"><img src="https://david-dm.org/ianmcburnie/jquery-focusable/dev-status.svg" alt="devDependency status" /></a>
</p>

Gets all focusable descendant elements for the **first element** in the set of matched elements.

```js
$(selector).focusable(options);
```

## Install

<strike>
```
npm install @ebay/jquery-focusable
```
</strike>

```js
npm install jquery-focusable
```

**NOTE: The @ebay package scope is no longer supported. In order to receive latest NPM updates, please use the non-scoped version of this package.**

## Options

`findNegativeTabindex` - Find and return elements with tabindex equal to -1 (default: true)
`findPositiveTabindex` - Find and return elements with tabindex greater than 0 (default: true)

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
* `npm run lint` lints code and reports errors to lint.txt
* `npm run fix` attempts to auto fix code lint errors
* `npm run minify` builds minified version of code
* `npm run build` cleans, lints, tests and minifies (called on `npm prepublish` hook)
* `npm run clean` deletes all generated files

## Reports

Each test run will generate the following reports:

* `/test_reports/coverage` contains Istanbul code coverage report
* `/test_reports/html` contains HTML test report
* `/test_reports/junit` contains JUnit test report

## CI Build

https://travis-ci.org/ianmcburnie/jquery-focusable

## Code Coverage

https://coveralls.io/github/ianmcburnie/jquery-focusable?branch=master
