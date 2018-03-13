import ClayCreationMenuDropdown from '../ClayCreationMenuDropdown';

let clayCreationMenuDropdown;

let getItems = function(maxItems, name) {
	let items = [];

	for (let i=1; i <= maxItems; i++) {
		items.push({
			href: '#' + name + i,
			label: name + i,
		});
	}

	return items;
};

describe('ClayCreationMenuDropdown', function() {
	afterEach(() => {
		if (clayCreationMenuDropdown) {
			clayCreationMenuDropdown.dispose();
		}
	});

	it('should render default markdown', () => {
		clayCreationMenuDropdown = new ClayCreationMenuDropdown({
			mainItems: getItems(2, 'main'),
			spritemap: 'icons.svg',
		});

		expect(clayCreationMenuDropdown).toMatchSnapshot();
	});

	it('should render a creation menu dropdown with classes', () => {
		clayCreationMenuDropdown = new ClayCreationMenuDropdown({
			elementClasses: 'my-custom-class',
			mainItems: getItems(2, 'main'),
			spritemap: 'icons.svg',
		});

		expect(clayCreationMenuDropdown).toMatchSnapshot();
	});

	it('should render a creation menu dropdown with id', () => {
		clayCreationMenuDropdown = new ClayCreationMenuDropdown({
			id: 'myId',
			mainItems: getItems(2, 'main'),
			spritemap: 'icons.svg',
		});

		expect(clayCreationMenuDropdown).toMatchSnapshot();
	});

	it('should render a disabled creation menu dropdown', () => {
		clayCreationMenuDropdown = new ClayCreationMenuDropdown({
			disabled: true,
			mainItems: getItems(2, 'main'),
			spritemap: 'icons.svg',
		});

		expect(clayCreationMenuDropdown).toMatchSnapshot();
	});

	it('should render an expanded creation menu dropdown', () => {
		clayCreationMenuDropdown = new ClayCreationMenuDropdown({
			expanded: true,
			mainItems: getItems(2, 'main'),
			spritemap: 'icons.svg',
		});

		expect(clayCreationMenuDropdown).toMatchSnapshot();
	});

	it('should render a creation menu dropdown with favorite items', () => {
		clayCreationMenuDropdown = new ClayCreationMenuDropdown({
			favoriteItems: getItems(2, 'favorite'),
			mainItems: getItems(2, 'main'),
			spritemap: 'icons.svg',
		});

		expect(clayCreationMenuDropdown).toMatchSnapshot();
	});

	it('should render a creation menu dropdown with 7 favorite items and more button when more than 7 favorite items are passed', () => {
		clayCreationMenuDropdown = new ClayCreationMenuDropdown({
			favoriteItems: getItems(8, 'favorite'),
			mainItems: getItems(2, 'main'),
			spritemap: 'icons.svg',
		});

		expect(clayCreationMenuDropdown).toMatchSnapshot();
	});

	it('should render a creation menu dropdown with 8 main items and more button when more than 8 main items and at least one favorite item are passed', () => {
		clayCreationMenuDropdown = new ClayCreationMenuDropdown({
			favoriteItems: getItems(2, 'favorite'),
			mainItems: getItems(10, 'main'),
			spritemap: 'icons.svg',
		});

		expect(clayCreationMenuDropdown).toMatchSnapshot();
	});

	it('should render a creation menu dropdown with 15 main items and more button when more than 15 main items and at no favorite item are passed', () => {
		clayCreationMenuDropdown = new ClayCreationMenuDropdown({
			mainItems: getItems(20, 'main'),
			spritemap: 'icons.svg',
		});

		expect(clayCreationMenuDropdown).toMatchSnapshot();
	});

	it('should render a creation menu dropdown and emit an event on more button click', () => {
		clayCreationMenuDropdown = new ClayCreationMenuDropdown({
			favoriteItems: getItems(8, 'favorite'),
			mainItems: getItems(2, 'main'),
			spritemap: 'icons.svg',
		});

		const spy = jest.spyOn(clayCreationMenuDropdown, 'emit');

		const element =
			clayCreationMenuDropdown.refs.dropdown.refs.portal.refs
				.dropdownButton.element;
		element.click();

		expect(spy).toHaveBeenCalled();
		expect(spy).toHaveBeenCalledWith(
			'moreButtonClicked',
			expect.any(Object)
		);
	});
});
