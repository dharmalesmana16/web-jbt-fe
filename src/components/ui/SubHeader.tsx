import React from "react";

export default function SubHeader({
	value,
	className = "",
	bgWhite = true,
}: any) {
	return (
		<p
			className={
				"leading-normal  font-medium text-md md:text-lg " +
				(bgWhite ? "text-gray-500 " : "text-gray-300 ") +
				className
			}
		>
			{value}
		</p>
	);
}
