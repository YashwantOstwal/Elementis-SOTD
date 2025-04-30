import { ComponentProps } from "react";
import cn from "@/utils/cn";

type InputProps = ComponentProps<"input"> & {
  className?: string;
};
export default function Input({ className, ...rest }: InputProps) {
  return (
    <input
      {...rest}
      className={cn(
        "w-full border-b border-[#919d86] bg-[#c4c7b3] px-4 py-3 text-xs outline-none md:px-6 md:text-base",
        className,
      )}
    />
  );
}
