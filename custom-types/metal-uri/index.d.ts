/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

// See https://github.com/metal/metal-plugins/blob/master/packages/metal-uri/src/Uri.js#L11
declare module 'metal-uri' {
	interface Uri {
		/**
		 * Adds the value of the named query parameters.
		 */
		addParameterValue(name: string, value: any): Uri;

		toString(): string;
	}

	interface UriType {
		new (uri: string, addProtocol?: boolean): Uri;
	}

	const Uri: UriType;

	export default Uri;
}
