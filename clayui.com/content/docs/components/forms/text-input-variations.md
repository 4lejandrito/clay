---
title: "Text Input Variations"
---

### Description

This section demonstrates the search, autocomplete, labels input, date, numeric, and password input variations.

<div class="alert alert-info">Check the <a href="https://lexicondesign.io">Lexicon</a> <a href="https://lexicondesign.io/docs/patterns/Forms/text_input_variations.html">Text Input Variations</a> for a more in-depth look at the motivations and proper usage of this component.</div>

### Autocomplete text field

<div class="sheet" style="height:255px;">
	<div class="dropdown-full form-group">
		<input class="form-control" type="text" value="Rob"/>
		<ul class="dropdown-menu show">
			<li>
				<a class="dropdown-item" href="#1">Rob<strong>ert Downey Jr.</strong></a>
			</li>
			<li>
				<a class="dropdown-item" href="#1">Rob<strong>ert Plant</strong></a>
			</li>
			<li>
				<a class="dropdown-item" href="#1">Rob<strong>ert Baratheon</strong></a>
			</li>
			<li>
				<a class="dropdown-item" href="#1">Rob<strong>ert De Niro</strong></a>
			</li>
		</ul>
	</div>
</div>

```soy
{call ClayAutocomplete.render}
	{param dataSource: [
		'Robert Downey',
		'Robert Plant',
		'Robert Baratheon',
		'Robert De niro'
	] /}
	{param inputValue: 'Rob' /}
{/call}
```
```html
<clay-autocomplete
	dataSource="['Robert Downey', 'Robert Plant', 'Robert Baratheon', 'Robert De niro']"
	inputValue="Rob"
>
</clay-autocomplete>
```
```html
<div class="dropdown-full form-group">
	<input class="form-control" type="text" value="Rob"/>
	<ul class="dropdown-menu show">
		<li>
			<a class="dropdown-item" href="#1">Rob<strong>ert Downey Jr.</strong></a>
		</li>
		<li>
			<a class="dropdown-item" href="#1">Rob<strong>ert Plant</strong></a>
		</li>
		<li>
			<a class="dropdown-item" href="#1">Rob<strong>ert Baratheon</strong></a>
		</li>
		<li>
			<a class="dropdown-item" href="#1">Rob<strong>ert De Niro</strong></a>
		</li>
	</ul>
</div>
```

#### API

<div>
	[APITable "clay-autocomplete/src/ClayAutocomplete.js"]
</div>

### Search field

<div class="sheet" style="height:255px;">
	<div class="input-group">
		<div class="dropdown-full input-group-item">
			<input class="form-control input-group-inset input-group-inset-after" placeholder="Search for..." type="text" value="ele"/>
			<span class="input-group-inset-item input-group-inset-item-after">
				<button class="btn btn-unstyled" type="submit">
					<svg class="lexicon-icon lexicon-icon-search" focusable="false" role="presentation">
						<use href="/images/icons/icons.svg#search" />
					</svg>
				</button>
				<button class="btn btn-unstyled" type="button">
					<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
						<use href="/images/icons/icons.svg#times" />
					</svg>
				</button>
			</span>
			<ul class="dropdown-menu show">
				<li>
					<a class="dropdown-item" href="#1">ele<strong>ctric toothbrush</strong></a>
				</li>
				<li>
					<a class="dropdown-item" href="#1">ele<strong>ctric kettle</strong></a>
				</li>
				<li>
					<a class="dropdown-item" href="#1">ele<strong>ctric razor</strong></a>
				</li>
				<li>
					<a class="dropdown-item" href="#1">ele<strong>ctrodes for tents</strong></a>
				</li>
			</ul>
		</div>
	</div>
</div>

```html
<div class="input-group">
	<div class="dropdown-full input-group-item">
		<input class="form-control input-group-inset input-group-inset-after" placeholder="Search for..." type="text" value="ele"/>
		<span class="input-group-inset-item input-group-inset-item-after">
			<button class="btn btn-unstyled" type="submit">
				<svg class="lexicon-icon lexicon-icon-search" focusable="false" role="presentation">
					<use href="/images/icons/icons.svg#search" />
				</svg>
			</button>
			<button class="btn btn-unstyled" type="button">
				<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
					<use href="/images/icons/icons.svg#times" />
				</svg>
			</button>
		</span>
		<ul class="dropdown-menu show">
			<li>
				<a class="dropdown-item" href="#1">ele<strong>ctric toothbrush</strong></a>
			</li>
			<li>
				<a class="dropdown-item" href="#1">ele<strong>ctric kettle</strong></a>
			</li>
			<li>
				<a class="dropdown-item" href="#1">ele<strong>ctric razor</strong></a>
			</li>
			<li>
				<a class="dropdown-item" href="#1">ele<strong>ctrodes for tents</strong></a>
			</li>
		</ul>
	</div>
</div>
```

### Labels Input Field

<div class="sheet">
	<div class="form-group">
		<label for="tagsField1">Tags</label>
		<div class="input-group input-group-stacked-sm-down">
			<div class="input-group-item">
				<div class="form-control form-control-tag-group">
					<input class="form-control-inset" id="tagsField1" type="text"/>
				</div>
				<div class="form-feedback-group">
					<div class="form-text">You can use a comma to enter tags.</div>
				</div>
			</div>
			<div class="input-group-item input-group-item-shrink">
				<button class="btn btn-secondary" type="button">Select</button>
			</div>
		</div>
	</div>
	<div class="form-group">
		<label for="tagsField2">Tags</label>
		<div class="input-group input-group-stacked-sm-down">
			<div class="input-group-item">
				<div class="form-control form-control-tag-group">
					<span class="label label-dismissible label-secondary">
						<span class="label-item label-item-expand">wall</span>
						<span class="label-item label-item-after">
							<button aria-label="Close" class="close" type="button">
								<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
									<use href="/images/icons/icons.svg#times"></use>
								</svg>
							</button>
						</span>
					</span>
					<span class="label label-dismissible label-secondary">
						<span class="label-item label-item-expand">wallpaper</span>
						<span class="label-item label-item-after">
							<button aria-label="Close" class="close" type="button">
								<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
									<use href="/images/icons/icons.svg#times"></use>
								</svg>
							</button>
						</span>
					</span>
					<span class="label label-dismissible label-secondary">
						<span class="label-item label-item-expand">wonderwall</span>
						<span class="label-item label-item-after">
							<button aria-label="Close" class="close" type="button">
								<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
									<use href="/images/icons/icons.svg#times"></use>
								</svg>
							</button>
						</span>
					</span>
					<span class="label label-dismissible label-secondary">
						<span class="label-item label-item-expand">winterfell</span>
						<span class="label-item label-item-after">
							<button aria-label="Close" class="close" type="button">
								<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
									<use href="/images/icons/icons.svg#times"></use>
								</svg>
							</button>
						</span>
					</span>
					<input class="form-control-inset" id="tagsField2" type="text" value="some value"/>
				</div>
				<div class="form-feedback-group">
					<div class="form-text">You can use a comma to enter tags.</div>
				</div>
			</div>
			<div class="input-group-item input-group-item-shrink">
				<button class="btn btn-secondary" type="button">Select</button>
			</div>
		</div>
	</div>
</div>

```soy
{call ClayMultiSelect.render}
	{param dataSource: [
		'wall',
		'wallpaper',
		'wonderwall',
		'winterfell'
	] /}
	{param helpText: 'You can use a comma to enter tags' /}
	{param label: 'Tags' /}
	{param selectedItems: [
		[
			'label': 'wall',
			'value': 'wall'
		],
		[
			'label': 'wallpaper',
			'value': 'wallpaper'
		]
	] /}
{/call}
```
```html
<clay-multi-select
	dataSource="['wall', 'wallpaper', 'wonderwall', 'winterfell']"
	helpText="You can use a comma to enter tags"
	label="Tags"
	selectedItems="[{'label': 'wall', 'value': 'wall'}, {'label': 'wallpaper', 'value': 'wallpaper'}]"
>
</clay-multi-select>
```
```html
<div class="form-group">
	<label for="tagsField1">Tags</label>
	<div class="input-group input-group-stacked-sm-down">
		<div class="input-group-item">
			<div class="form-control form-control-tag-group">
				<input class="form-control-inset" id="tagsField1" type="text"/>
			</div>
			<div class="form-feedback-group">
				<div class="form-text">You can use a comma to enter tags.</div>
			</div>
		</div>
		<div class="input-group-item input-group-item-shrink">
			<button class="btn btn-secondary" type="button">Select</button>
		</div>
	</div>
</div>

<div class="form-group">
	<label for="tagsField2">Tags</label>
	<div class="input-group input-group-stacked-sm-down">
		<div class="input-group-item">
			<div class="form-control form-control-tag-group">
				<span class="label label-dismissible label-secondary">
					<span class="label-item label-item-expand">wall</span>
					<span class="label-item label-item-after">
						<button aria-label="Close" class="close" type="button">
							<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#times"></use>
							</svg>
						</button>
					</span>
				</span>
				<span class="label label-dismissible label-secondary">
					<span class="label-item label-item-expand">wallpaper</span>
					<span class="label-item label-item-after">
						<button aria-label="Close" class="close" type="button">
							<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#times"></use>
							</svg>
						</button>
					</span>
				</span>
				<span class="label label-dismissible label-secondary">
					<span class="label-item label-item-expand">wonderwall</span>
					<span class="label-item label-item-after">
						<button aria-label="Close" class="close" type="button">
							<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#times"></use>
							</svg>
						</button>
					</span>
				</span>
				<span class="label label-dismissible label-secondary">
					<span class="label-item label-item-expand">winterfell</span>
					<span class="label-item label-item-after">
						<button aria-label="Close" class="close" type="button">
							<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#times"></use>
							</svg>
						</button>
					</span>
				</span>
				<input class="form-control-inset" id="tagsField2" type="text" value="some value"/>
			</div>
			<div class="form-feedback-group">
				<div class="form-text">You can use a comma to enter tags.</div>
			</div>
		</div>
		<div class="input-group-item input-group-item-shrink">
			<button class="btn btn-secondary" type="button">Select</button>
		</div>
	</div>
</div>
```

#### API

<div>
	[APITable "clay-multi-select/src/ClayMultiSelect.js"]
</div>

### Numeric field

<div class="sheet">
	<div class="form-group">
		<label for="basicInputTypeNumber">Amount</label>
		<input class="form-control" id="basicInputTypeNumber" type="number"/>
	</div>
</div>

```html
<div class="form-group">
	<label for="basicInputTypeNumber">Amount</label>
	<input class="form-control" id="basicInputTypeNumber" type="number"/>
</div>
```

### Password field

<p>A pattern for displaying the content inside a password input. Use <code>.input-text-label</code> inside <code>.input-group-inset-item</code> to display specific content for <code>.form-control[type="text"]</code> and <code>.input-password-label</code> for <code>.form-control[type="password"]</code>.</p>

<div class="sheet">
	<div class="form-group">
		<label for="passwordFieldHidden">Password</label>
		<div class="input-group input-group-password">
			<div class="input-group-item">
				<input aria-label="Password Hidden" class="form-control input-group-inset input-group-inset-after" id="passwordFieldHidden" type="password" value="my-seekret"/>
				<div class="input-group-inset-item input-group-inset-item-after">
					<button class="btn btn-unstyled" type="button">
						<span class="input-text-label">
							<svg class="lexicon-icon lexicon-icon-hidden" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#hidden" />
							</svg>
						</span>
						<span class="input-password-label">
							<svg class="lexicon-icon lexicon-icon-view" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#view" />
							</svg>
						</span>
					</button>
				</div>
			</div>
		</div>
	</div>
	<div class="form-group">
		<label for="passwordFieldHidden">Password</label>
		<div class="input-group input-group-password">
			<div class="input-group-item">
				<input aria-label="Password Hidden" class="form-control input-group-inset input-group-inset-after" id="passwordFieldHidden" type="text" value="my-seekret"/>
				<div class="input-group-inset-item input-group-inset-item-after">
					<button class="btn btn-unstyled" type="button">
						<span class="input-text-label">
							<svg class="lexicon-icon lexicon-icon-hidden" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#hidden" />
							</svg>
						</span>
						<span class="input-password-label">
							<svg class="lexicon-icon lexicon-icon-view" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#view" />
							</svg>
						</span>
					</button>
				</div>
			</div>
		</div>
	</div>
</div>

```html
<div class="form-group">
	<label for="passwordFieldHidden">Password</label>
	<div class="input-group input-group-password">
		<div class="input-group-item">
			<input aria-label="Password Hidden" class="form-control input-group-inset input-group-inset-after" id="passwordFieldHidden" type="password" value="my-seekret"/>
			<div class="input-group-inset-item input-group-inset-item-after">
				<button class="btn btn-unstyled" type="button">
					<span class="input-text-label">
						<svg class="lexicon-icon lexicon-icon-hidden" focusable="false" role="presentation">
							<use href="/images/icons/icons.svg#hidden" />
						</svg>
					</span>
					<span class="input-password-label">
						<svg class="lexicon-icon lexicon-icon-view" focusable="false" role="presentation">
							<use href="/images/icons/icons.svg#view" />
						</svg>
					</span>
				</button>
			</div>
		</div>
	</div>
</div>

<div class="form-group">
	<label for="passwordFieldHidden">Password</label>
	<div class="input-group input-group-password">
		<div class="input-group-item">
			<input aria-label="Password Hidden" class="form-control input-group-inset input-group-inset-after" id="passwordFieldHidden" type="text" value="my-seekret"/>
			...
		</div>
	</div>
</div>
```
