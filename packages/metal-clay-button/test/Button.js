'use strict';

import MetalClayButton from '../src/MetalClayButton';

const FIXTURE_DIR = 'test/fixture/';

const DEFAULT_BUTTON = __html__[FIXTURE_DIR + 'testDefaultMetalClayButton.html'].trim();
const DEFAULT_BUTTON_WITH_ARIA_LABEL = __html__[FIXTURE_DIR + 'testMetalClayButtonWithAriaLabel.html'].trim();
const DEFAULT_BUTTON_WITH_LABEL = __html__[FIXTURE_DIR + 'testMetalClayButtonWithLabel.html'].trim();
const DEFAULT_BUTTON_WITH_NAME = __html__[FIXTURE_DIR + 'testMetalClayButtonWithName.html'].trim();
const DISABLED_BUTTON = __html__[FIXTURE_DIR + 'testDisabledMetalClayButton.html'].trim();
const SUBMIT_BUTTON = __html__[FIXTURE_DIR + 'testSubmitMetalClayButton.html'].trim();
const SUCCESS_BUTTON = __html__[FIXTURE_DIR + 'testSuccessMetalClayButton.html'].trim();

let sample;

describe('MetalClayButton', function() {
	afterEach(() => {
		if (sample) {
			sample.dispose();
		}
	});

	it('should generate the default markup', function() {
		sample = new MetalClayButton();

		assert.strictEqual(sample.element.outerHTML, DEFAULT_BUTTON);
	});

	it('should render a submit button', function() {
		sample = new MetalClayButton({
			type: 'submit'
		});

		assert.strictEqual(sample.element.outerHTML, SUBMIT_BUTTON);
	});

	it('should render a disabled button', function() {
		sample = new MetalClayButton({
			disabled: true
		});

		assert.strictEqual(sample.element.outerHTML, DISABLED_BUTTON);
	});

	it('should render a success button', function() {
		sample = new MetalClayButton({
			style: 'success'
		});

		assert.strictEqual(sample.element.outerHTML, SUCCESS_BUTTON);
	});

	it('should render a button with label', function() {
		sample = new MetalClayButton({
			label: 'Label'
		});

		assert.strictEqual(sample.element.outerHTML, DEFAULT_BUTTON_WITH_LABEL);
	});

	it('should render a button with label', function() {
		sample = new MetalClayButton({
			name: 'myButton'
		});

		assert.strictEqual(sample.element.outerHTML, DEFAULT_BUTTON_WITH_NAME);
	});

	it('should render a link with ariaLabel attribute', function() {
		sample = new MetalClayButton({
			ariaLabel: 'My Description',
			href: 'http://liferay.com',
			label: 'Visit Liferay.com'
		});

		assert.strictEqual(sample.element.outerHTML, DEFAULT_BUTTON_WITH_ARIA_LABEL);
	});
});
