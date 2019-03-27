/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React, {FunctionComponent, InputHTMLAttributes} from 'react';

interface ITPContentProps extends InputHTMLAttributes<HTMLInputElement> {
	defaultValue?: string;
	timezone?: string;
}

interface Props extends ITPContentProps {
	wrapTime?: boolean;
}

const timePickerContent: FunctionComponent<ITPContentProps> = ({
	defaultValue,
	onChange,
	onInput,
	timezone,
	value,
	...otherProps
}) => (
	<React.Fragment>
		<div className="input-group-item">
			<input
				{...otherProps}
				className="form-control"
				defaultValue={defaultValue}
				onChange={onChange}
				onInput={onInput}
				type="time"
				value={value}
			/>
		</div>
		{timezone && (
			<div className="input-group-item input-group-item-shrink">
				<span className="input-group-text">{`(${timezone})`}</span>
			</div>
		)}
	</React.Fragment>
);

const ClayTimePicker: FunctionComponent<Props> = ({
	wrapTime = true,
	...otherProps
}) => {
	if (wrapTime) {
		return (
			<div className="input-group">{timePickerContent(otherProps)}</div>
		);
	}

	return timePickerContent(otherProps);
};

export default ClayTimePicker;
