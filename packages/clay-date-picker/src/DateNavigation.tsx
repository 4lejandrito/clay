/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as Helpers from './Helpers';
import moment from 'moment';
import React, {
	ChangeEvent,
	FunctionComponent,
	HTMLAttributes,
	useMemo,
} from 'react';
import {IAriaLabels, IYears} from './ClayDatePicker';

import Button from './Button';
import Select, {ISelectOption} from './Select';

interface Props extends HTMLAttributes<HTMLDivElement> {
	ariaLabels: IAriaLabels;
	currentMonth: Date;
	months: Array<string>;
	onDotClicked: () => void;
	onMonthChange: (date: Date) => void;
	spritemap: string;
	years: IYears;
}

const DateNavigation: FunctionComponent<Props> = ({
	ariaLabels,
	currentMonth,
	months,
	onDotClicked,
	onMonthChange,
	spritemap,
	years,
}) => {
	const memoizedYears: Array<ISelectOption> = useMemo(
		() =>
			Helpers.range(years).map(elem => {
				return {
					label: elem,
					value: elem,
				};
			}),
		[years]
	);

	const memoizedMonths: Array<ISelectOption> = useMemo(
		() =>
			months.map((month, index) => {
				return {
					label: month,
					value: index,
				};
			}),
		[months]
	);

	/**
	 * Handles the change of the month from the available
	 * years in the range
	 */
	function handleChangeMonth(month: number) {
		const date = moment(currentMonth)
			.clone()
			.add(month, 'M')
			.toDate();
		const year = date.getFullYear();

		if (memoizedYears.find(elem => elem.value === year)) {
			onMonthChange(date);
		}
	}

	/**
	 * Handles the previous month button
	 */
	const handlePreviousMonthClicked = () => handleChangeMonth(-1);

	/**
	 * Handles the next month button
	 */
	const handleNextMonthClicked = () => handleChangeMonth(1);

	/**
	 * Handles the change of the year and month of the header
	 */
	function handleFormChange(event: ChangeEvent<HTMLSelectElement>) {
		if (event.currentTarget.form === null) {
			return;
		}

		const {month, year} = event.currentTarget.form;
		onMonthChange(new Date(year.value, month.value));
	}

	return (
		<div className="date-picker-calendar-header">
			<form className="date-picker-nav">
				<div className="date-picker-nav-item input-date-picker-month">
					<Select
						name="month"
						onChange={handleFormChange}
						options={memoizedMonths}
						value={currentMonth.getMonth()}
					/>
				</div>
				<div className="date-picker-nav-item input-date-picker-year">
					<Select
						name="year"
						onChange={handleFormChange}
						options={memoizedYears}
						value={currentMonth.getFullYear()}
					/>
				</div>

				<div className="date-picker-nav-item date-picker-nav-item-expand date-picker-nav-controls">
					<Button
						ariaLabel={ariaLabels.buttonPreviousMonth}
						icon="angle-left"
						monospaced
						onClick={handlePreviousMonthClicked}
						size="sm"
						spritemap={spritemap}
						variant="unstyled"
					/>
					<Button
						ariaLabel={ariaLabels.buttonDot}
						icon="simple-circle"
						monospaced
						onClick={onDotClicked}
						size="sm"
						spritemap={spritemap}
						variant="unstyled"
					/>
					<Button
						ariaLabel={ariaLabels.buttonNextMonth}
						icon="angle-right"
						monospaced
						onClick={handleNextMonthClicked}
						size="sm"
						spritemap={spritemap}
						variant="unstyled"
					/>
				</div>
			</form>
		</div>
	);
};

export default DateNavigation;
