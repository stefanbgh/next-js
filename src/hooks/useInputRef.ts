import { useRef } from "react";

export const useInputRef = () => useRef<HTMLInputElement | null>(null);
