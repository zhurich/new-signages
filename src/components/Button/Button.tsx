import React, { FC } from "react";
import block from 'bem-cn';
import "./Button.scss";

type ButtonType = 'default' | 'primary' | 'secondary' | 'link' | 'icon';

interface IconProps {
	type: 'component' | 'image';
	content: React.ReactNode | string;
	width?: number;
	height?: number;
}

export interface Props {
	className?: string;
	style?: {};
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	type?: ButtonType;
	htmlType?: "submit" | "reset" | "button";
	disabled?: boolean;
	startIcon?: IconProps;
	endIcon?: IconProps;
	children?: React.ReactNode;
}

const b = block("button");

const Icon: FC<IconProps> = ({ type, content, width = 20, height = 20 }) => {
	if (type === 'image') {
		return <img src={content as string} alt="icon" width={width} height={height} />;
	}
	return <>{content}</>;
};

export const Button: FC<Props> = ({
	className = "",
	style,
	onClick = () => {},
	type = "default",
	htmlType,
	disabled = false,
	startIcon,
	endIcon,
	children,
	...props
}) => (
	<button
		className={`${b({ [type]: true })} ${className}`.trim()}
		onClick={onClick}
		disabled={disabled}
		style={style}
		type={htmlType}
		{...props}
	>
		{startIcon && <div className={b("icon")}><Icon {...startIcon} /></div>}
		<span>{children}</span>
		{endIcon && <div className={b("icon")}><Icon {...endIcon} /></div>}
	</button>
);