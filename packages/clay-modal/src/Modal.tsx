/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import Body from './Body';
import classNames from 'classnames';
import Context, {IContext} from './Context';
import Footer from './Footer';
import Header from './Header';
import React, {FunctionComponent, useEffect, useRef} from 'react';
import {ClayPortal} from '@clayui/shared';
import {Observer, ObserverType, Size} from './types';
import {useUserInteractions} from './Hook';

interface IProps
	extends React.HTMLAttributes<HTMLDivElement>,
		Omit<IContext, 'onClose'> {
	/**
	 * The size of element modal.
	 */
	size?: Size;

	/**
	 * Observer is Modal's communication system with `useModal`
	 * hook, adds observer from `useModal` hook here.
	 */
	observer: Observer;
}

const ClayModal: FunctionComponent<IProps> & {
	Body: typeof Body;
	Footer: typeof Footer;
	Header: typeof Header;
} = ({
	children,
	className,
	observer,
	size,
	spritemap,
	status,
	...otherProps
}: IProps) => {
	const modalBodyElementRef = useRef<HTMLDivElement | null>(null);
	const modalDialogElementRef = useRef<HTMLDivElement | null>(null);

	useUserInteractions(modalDialogElementRef, () =>
		observer.dispatch(ObserverType.Close)
	);

	useEffect(() => observer.dispatch(ObserverType.Open), []);

	return (
		<ClayPortal subPortalRef={modalBodyElementRef}>
			<div
				className={classNames('modal-backdrop fade', {
					show: observer.mutation,
				})}
			/>
			<div
				{...otherProps}
				className={classNames('fade modal d-block', className, {
					show: observer.mutation,
				})}
				ref={modalBodyElementRef}
			>
				<div
					className={classNames('modal-dialog', {
						[`modal-${size}`]: size,
						[`modal-${status}`]: status,
					})}
					ref={modalDialogElementRef}
					tabIndex={-1}
				>
					<div className="modal-content">
						<Context.Provider
							value={{
								onClose: () =>
									observer.dispatch(ObserverType.Close),
								spritemap,
								status,
							}}
						>
							{children}
						</Context.Provider>
					</div>
				</div>
			</div>
		</ClayPortal>
	);
};

ClayModal.Body = Body;
ClayModal.Footer = Footer;
ClayModal.Header = Header;

export default ClayModal;
