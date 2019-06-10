/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */
import React from 'react';

import classNames from 'classnames';

import Context from './Context';

type CardDescriptionDisplayType = 'text' | 'title' | 'subtitle';

interface CardDescriptionProps extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactText;

	/**
	 * Truncates the text inside a description.
	 */
	truncate?: boolean;

	/**
	 * Type of description that can be applied for a text.
	 */
	type: CardDescriptionDisplayType;
}

export const Description: React.FunctionComponent<CardDescriptionProps> = ({
	children,
	className,
	truncate = true,
	type,
	...otherProps
}) => {
	const {displayType} = React.useContext(Context);

	const TagName =
		displayType === 'interactive' ||
		displayType === 'horizontal-interactive'
			? 'span'
			: 'div';

	return (
		<TagName
			className={classNames(className, `card-${type}`, {
				'text-truncate': truncate,
			})}
			{...otherProps}
		>
			{children}
		</TagName>
	);
};
