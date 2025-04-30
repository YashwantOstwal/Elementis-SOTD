import { twMerge } from "tailwind-merge";
import clsx, { ClassValue } from "clsx";

const cn = (...args: ClassValue[]) => twMerge(clsx(args));
export default cn;
