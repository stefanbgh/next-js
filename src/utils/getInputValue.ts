import { RefObject } from "react";

export const getInputValue = (
	refObj: RefObject<HTMLInputElement | null>
): string => {
	return refObj.current!.value;
};
