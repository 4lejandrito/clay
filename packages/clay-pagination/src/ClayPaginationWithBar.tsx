/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import ClayButton from '@clayui/button';
import ClayDropDown from '@clayui/drop-down';
import ClayIcon from '@clayui/icon';
import ClayPagination from '../src/index';
import React, {useState} from 'react';
import {noop, sub} from '@clayui/shared';

const defaultDeltas = [10, 20, 30, 50];

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * Possible values of items per page.
	 */
	deltas?: Array<number>;

	disabledPages?: Array<number>;

	/**
	 * The number of pages to show on each side of the active page before
	 * using an ellipsis dropdown.
	 */
	ellipsisBuffer?: number;

	/**
	 * Function used to create the href provided for each page link.
	 */
	hrefConstructor?: (page?: number) => string;

	labels?: {
		paginationResults: string;

		perPageItems: string;

		selectPerPageItems: string;
	};

	onDeltaChange?: (page?: number) => void;

	/**
	 * Callback for when the active page changes. This is only used if
	 * an href is not provided.
	 */
	onPageChange?: (page?: number) => void;

	/**
	 * Initialize the page that is currently active. The first page is `1`.
	 */
	initialActivePage?: number;

	/**
	 * Initializes delta. Default is `10`.
	 */
	initialSelectedDelta?: number;

	/**
	 * The size of pagination element.
	 */
	size?: 'sm' | 'lg';

	/**
	 * Path to spritemap from clay-css.
	 */
	spritemap: string;

	/**
	 * The total number of items in the pagination list.
	 */
	totalItems: number;
}

const DEFAULT_LABELS = {
	paginationResults: 'Showing {0} to {1} of {2}',
	perPageItems: '{0} items',
	selectPerPageItems: '{0} items',
};

export const ClayPaginationWithBar: React.FunctionComponent<IProps> = ({
	deltas = defaultDeltas,
	disabledPages,
	ellipsisBuffer,
	hrefConstructor,
	labels = DEFAULT_LABELS,
	onDeltaChange = noop,
	onPageChange = noop,
	initialSelectedDelta = defaultDeltas[0],
	initialActivePage = 1,
	size,
	spritemap,
	totalItems,
	...otherProps
}: IProps) => {
	const [active, setActive] = useState<boolean>(false);
	const [activePage, setActivePage] = useState<number>(initialActivePage);
	const [perPage, setPerPage] = useState<number>(initialSelectedDelta);

	return (
		<div
			className={classNames('pagination-bar', {
				[`pagination-${size}`]: size,
			})}
			{...otherProps}
		>
			<ClayDropDown
				active={active}
				className="pagination-items-per-page"
				onActiveChange={newVal => setActive(newVal)}
				trigger={
					<ClayButton
						data-testid="selectPaginationBar"
						displayType="unstyled"
					>
						{sub(labels.perPageItems, [perPage])}
						<ClayIcon
							spritemap={spritemap}
							symbol="caret-double-l"
						/>
					</ClayButton>
				}
			>
				<ClayDropDown.ItemList>
					{deltas.map((delta: number, i) => (
						<ClayDropDown.Item
							data-testid={`dropdownItem${i}`}
							key={`dropdownItem${i}`}
							onClick={() => {
								setPerPage(delta);
								if (onDeltaChange) {
									onDeltaChange(delta);
								}
							}}
						>
							{sub(labels.selectPerPageItems, [String(delta)])}
						</ClayDropDown.Item>
					))}
				</ClayDropDown.ItemList>
			</ClayDropDown>

			<div className="pagination-results">
				{sub(labels.paginationResults, [
					(activePage - 1) * perPage + 1,
					activePage * perPage < totalItems
						? activePage * perPage
						: totalItems,
					totalItems,
				])}
			</div>

			<ClayPagination
				activePage={activePage}
				disabledPages={disabledPages}
				ellipsisBuffer={ellipsisBuffer}
				hrefConstructor={hrefConstructor}
				onPageChange={page => {
					if (page) {
						setActivePage(page);
						if (onPageChange) {
							onPageChange(page);
						}
					}
				}}
				spritemap={spritemap}
				totalPages={Math.ceil(totalItems / perPage)}
			/>
		</div>
	);
};
