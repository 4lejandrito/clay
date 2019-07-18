/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayIcon from '@clayui/icon';
import React from 'react';

interface IProps {
	/**
	 * Flag to indicate if step should show its been completed
	 */
	complete?: boolean;

	/**
	 * Value to display above step icon
	 */
	label?: React.ReactText;

	/**
	 * Callback for when the icon is clicked
	 */
	onClick?: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;

	/**
	 * Path to clay-css spritemap
	 */
	spritemap?: string;

	/**
	 * Value to display below step icon
	 */
	subTitle?: React.ReactText;
}

const ClayMultiStepNavIndicator = React.forwardRef<HTMLDivElement, IProps>(
	({complete, label, onClick, spritemap, subTitle}, ref) => (
		<div className="multi-step-indicator" ref={ref}>
			{subTitle && (
				<div className="multi-step-indicator-label">{subTitle}</div>
			)}

			<span className="multi-step-icon" onClick={onClick}>
				{complete && <ClayIcon spritemap={spritemap} symbol="check" />}

				{!complete && label}
			</span>
		</div>
	)
);

export default ClayMultiStepNavIndicator;
