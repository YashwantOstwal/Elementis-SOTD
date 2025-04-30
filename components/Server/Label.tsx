import cn from "@/utils/cn";

interface LabelProps {
  label: string;
  children: React.ReactNode;
  className?: string;
}

const Label = ({ label, children, className }: LabelProps) => (
  <label
    className={cn(
      "flex flex-col gap-3 text-2xs [line-height:1] text-[#2b3530] md:text-sm",
      className,
    )}
  >
    <span className="opacity-60">{label}</span> {children}
  </label>
);
export default Label;
