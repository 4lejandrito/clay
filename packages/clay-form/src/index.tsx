/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as React from 'react';
import Input, {IProps as IInputProps} from './Input';

const ClayForm: React.FunctionComponent<
	React.HTMLAttributes<HTMLDivElement>
> & {
	Input: typeof Input;
} = ({children}) => {
	return <>{children}</>;
};

ClayForm.Input = Input;

export {IInputProps};
export default ClayForm;
