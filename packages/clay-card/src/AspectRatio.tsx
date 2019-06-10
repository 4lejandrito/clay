/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */
import Context from './Context';

import classNames from 'classnames';

import React from 'react';

type BackgroundImageAspectRatioType = 'contain' | 'cover' | 'center';

type ContainerAspectRatioType = '1/1' | '3/2' | '4/3' | '8/5' | '16/9';

interface CardAspectRatioProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * Aspect ratio to be applied on the background image of the card.
	 */
	backgroundImageAspectRatio?: BackgroundImageAspectRatioType;

	/**
	 * Contrains an image for a given Aspect Ratio.
	 */
	containerAspectRatio?: ContainerAspectRatioType;

	children:
		| React.ReactElement<HTMLElement>[]
		| React.ReactElement<HTMLElement>;
}

export const AspectRatio: React.FunctionComponent<CardAspectRatioProps> = ({
	backgroundImageAspectRatio,
	children,
	className,
	containerAspectRatio,
}) => {
	const {displayType} = React.useContext(Context);

	const isCardType = {
		horizontal: displayType === 'horizontal',
		interactive: displayType === 'interactive',
	};

	const TagName = isCardType.interactive ? 'span' : 'div';

	return (
		<TagName
			className={classNames(className, 'aspect-ratio', {
				[`aspect-ratio-${
					containerAspectRatio
						? containerAspectRatio.replace('/', '-')
						: null
				}`]: containerAspectRatio,
				[`aspect-ratio-bg-${backgroundImageAspectRatio}`]: backgroundImageAspectRatio,
			})}
		>
			{children}
		</TagName>
	);
};
