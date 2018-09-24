---
title: "SCSS"
weight: 3
---

Clay CSS Framework provides some utilitarios for you to work with [SCSS](https://sass-lang.com) and be able to reuse in your classes.

- [Variables](#variables)
- [Mixins](#mixins)
- [Functions](#functions)

<article id="variables">

## Variables

> Think of variables as a way to store information that you want to reuse throughout your stylesheet. You can store things like colors, font stacks, or any CSS value you think you'll want to reuse. Sass uses the $ symbol to make something a variable. [SASS](https://sass-lang.com/guide)

Example:
```scss
// Alert Dismissible

$alert-dismissible-padding-bottom: null !default;
$alert-dismissible-padding-left: null !default;
$alert-dismissible-padding-right: 2.5rem !default; // 40px
$alert-dismissible-padding-top: null !default;
```

> [All **variables** available](https://github.com/liferay/clay/tree/master/packages/clay-css/src/scss/variables)

</article>

<article id="mixins">

## Mixins

> Some things in CSS are a bit tedious to write, especially with CSS3 and the many vendor prefixes that exist. A mixin lets you make groups of CSS declarations that you want to reuse throughout your site. You can even pass in values to make your mixin more flexible. A good use of a mixin is for vendor prefixes. Here's an example for transform. [SASS](https://sass-lang.com/guide)

```scss
$map: (
	bg: '#0B5FFF',
	//...
);

.my-button {
	@include clay-button-variant($map);
}
```
[clay-button-variant#L1](https://github.com/liferay/clay/blob/master/packages/clay-css/src/scss/mixins/_buttons.scss#L1)

You can find all mixins available by component if you want to create a component extension.

> [All **mixins** available](https://github.com/liferay/clay/tree/master/packages/clay-css/src/scss/mixins)

</article>

<article id="functions">

## Functions

Clay CSS provides some **SCSS** functions that help you to be more productive. understand more about **functions** at [sass-lang.com](https://sass-lang.com/documentation/file.SASS_REFERENCE.html#function_directives).

Sass ternary shorthand: `if($variable-name, true, false);`. See [setter#L5](https://github.com/liferay/clay/blob/master/packages/clay-css/src/scss/functions/_global-functions.scss#L5)

```scss
// @param $var - The variable name
// @param $val - The default value

setter($var, $val);
```

Helper for displaying warning messages for required variables. See [required#L29](https://github.com/liferay/clay/blob/master/packages/clay-css/src/scss/functions/_global-functions.scss#29)

```scss
// @param $var - The variable to check
// @param $msg - The error message

required($var, $msg);
```

> [All **functions** available](https://github.com/liferay/clay/blob/master/packages/clay-css/src/scss/functions/_global-functions.scss)

</article>