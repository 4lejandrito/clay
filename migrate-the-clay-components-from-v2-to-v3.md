# Migrating clay components from v2 to v3

This is a reference for upgrading your components from Clay v2 to Clay v3, this symbolizes that you are migrating your application from [Metal.js](https://metaljs.com) to [React.js](https://reactjs.org). Although there is a lot of coverage here, you probably do not have to do everything. We will do our best to keep things easy to follow, and as sequential as possible, so you can quickly get rocking in v3!

## Why you should migrate

This documentation page covers how to migrate from v2 to v3. The reason is covered in some blog posts:

-   (**_Coming soon_**) Clay v3-beta: Introduction the new React Components

## General changes

Clay v3 is introducing the rewriting of components in React and new components, the Framework change leads to some API changes that may no longer make sense for a context with React, wait for API changes and renames.

To symbolize this change, Clay is distributing the new packages on the scope npm `@clayui`, so you will find the packages `clay-link`, `clay-button`... on `@clayui/link`, `@clayui/button`.

> Clay v2 is still being distributed and maintained on the `clay-link`, `clay-button` packages...

## ClayButton

-   Removed icon dependency within button itself

```diff
<Button
-	label="Icon positioned at right"
-	icon="plus"
-	iconAlignment="right"
-	spritemap={spritemap}
-/>
+>
+      {'Icon positioned at right'}
+      <Icon spritemap={spritemap} symbol="plus"/>
+</Button>
```

## ClayLink

ClayLink has become simpler with v3, removing APIs from `icon` and `image`, making it flexible for you to define your content but complying with [Lexicon specifications](http://lexicondesign.io).

```diff
<ClayLink
	href="#link-styles"
-	label="Default"
-/>
+>
+	Default
+</ClayLink>
```

### API Changes

-   `buttonStyle` depreciated
-   `data` depreciated
-   `defaultEventHandler` depreciated
-   `elementClasses` renamed to `className`
-   `icon` depreciated
-   `iconAlignment` depreciated
-   `imageAlt` depreciated
-   `imageSrc` depreciated
-   `label` depreciated
-   `spritemap` depreciated
-   `style` renamed to `displayType`

### Compositions

To get to the behavior of having a ClayLink with icon, use the composition with ClayIcon:

```diff
<ClayLink
	href="#link-icons"
-	icon="add-cell"
-	label={<span>My Link Label</span>}
-	spritemap={spritemap}
-/>
+
+	<ClayIcon spritemap={spritemap} symbol="add-cell" />
+	<span>My Link Label</span>
+</ClayLink>
```

To get to the behavior of having a ClayLink with image, use the composition with the new ClayImage component:

```diff
<ClayLink
	href="#link-icons"
-	imageSrc="image.jpg"
-	imageAlt="my image"
-/>
+	<ClayImage src="image.jpg" alt="my image" />
+</ClayLink>
```

## ClayIcon

-   Added ability to utilize context for passing spritemap down instead of having to pass the prop everywhere.

## ClayRadioGroup, ClayRadio

Using a radio by itself doesn't make much sense, only when 2+ exist does the functionality of radio actually work, which is why we moved from `radio` to `radio-group`. The functionality is the same, but by being grouped together it should make it easier to use because the `ClayRadioGroup` component will internally handle which radio is checked and requires less re-duplication of `inline` and `name` props.

```jsx
//v2
// You'd have to manually determine which radio is `checked` and `onChange` for each one
<div>
	<ClayRadio inline name="foo" value="one" checked={'one' === checkValue} onClick={() => setValue('one')} />
	<ClayRadio inline name="foo" value="two" checked={'two' === checkValue} onClick={() => setValue('two')} />
	<ClayRadio inline name="foo" value="three" checked={'three' === checkValue} onClick={() => setValue('three')} />
</div>

// v3
<ClayRadioGroup
	onSelectedValueChange={val => setValue(val)}
	inline
	selectedValue={value}
	name="foo"
>
	<ClayRadioGroup.Radio label="One" value="one" />
	<ClayRadioGroup.Radio label="Two" value="two" />
	<ClayRadioGroup.Radio label="Three" value="three" />
</ClayRadioGroup>
```

## ClayLabel

### API Changes

-   `style` is now `displayType`
-   Removed `size` in favor of `large` since there is only default and large options.
-   Removed `label` in favor of utilizing `children` prop
-   Added `closeButtonProps` which allows you to add attributes to the nested button.
    -   This is where you would pass a callback for `onClick`.
