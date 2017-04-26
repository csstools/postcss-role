# PostCSS Role [<img src="https://postcss.github.io/postcss/logo.svg" alt="PostCSS Logo" width="90" height="90" align="right">][postcss]

[![NPM Version][npm-img]][npm-url]
[![Build Status][cli-img]][cli-url]
[![Licensing][lic-img]][lic-url]
[![Changelog][log-img]][log-url]
[![Gitter Chat][git-img]][git-url]

[PostCSS Role] lets you use a `:role` pseudo-class in CSS.

```css
/* before */

:role(button)

/* after */

[role="button"]
```

## Options

#### replace

Type: `String` | `Function`  
Default: `'[role="$&"]'`

Allows you to decide how the roles should be replaced, either by string or replace function.

## Usage

Add [PostCSS Role] to your build tool:

```bash
npm install postcss-role --save-dev
```

#### Node

Use [PostCSS Role] to process your CSS:

```js
require('postcss-role').process(YOUR_CSS, { /* options */ });
```

#### PostCSS

Add [PostCSS] to your build tool:

```bash
npm install postcss --save-dev
```

Use [PostCSS Role] as a plugin:

```js
postcss([
	require('postcss-role')({ /* options */ })
]).process(YOUR_CSS, /* options */);
```

#### Gulp

Add [Gulp PostCSS] to your build tool:

```bash
npm install gulp-postcss --save-dev
```

Use [PostCSS Role] in your Gulpfile:

```js
var postcss = require('gulp-postcss');

gulp.task('css', function () {
	return gulp.src('./src/*.css').pipe(
		postcss([
			require('postcss-role')({ /* options */ })
		])
	).pipe(
		gulp.dest('.')
	);
});
```

#### Grunt

Add [Grunt PostCSS] to your build tool:

```bash
npm install grunt-postcss --save-dev
```

Use [PostCSS Role] in your Gruntfile:

```js
grunt.loadNpmTasks('grunt-postcss');

grunt.initConfig({
	postcss: {
		options: {
			use: [
				require('postcss-role')({ /* options */ })
			]
		},
		dist: {
			src: '*.css'
		}
	}
});
```

[npm-url]: https://www.npmjs.com/package/postcss-role
[npm-img]: https://img.shields.io/npm/v/postcss-role.svg
[cli-url]: https://travis-ci.org/jonathantneal/postcss-role
[cli-img]: https://img.shields.io/travis/jonathantneal/postcss-role.svg
[lic-url]: LICENSE.md
[lic-img]: https://img.shields.io/npm/l/postcss-role.svg
[log-url]: CHANGELOG.md
[log-img]: https://img.shields.io/badge/changelog-md-blue.svg
[git-url]: https://gitter.im/postcss/postcss
[git-img]: https://img.shields.io/badge/chat-gitter-blue.svg

[PostCSS Role]: https://github.com/jonathantneal/postcss-role
[PostCSS]: https://github.com/postcss/postcss
[Gulp PostCSS]: https://github.com/postcss/gulp-postcss
[Grunt PostCSS]: https://github.com/nDmitry/grunt-postcss
