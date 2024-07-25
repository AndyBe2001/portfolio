import { cn } from "@/utils/tailwindcss";

export interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}
export const Tag = ({ children, className, ...props }: TagProps) => {
  return (
    <div
      className={cn("px-4 py-2 rounded-lg text-sm size-fit", className)}
      {...props}>
      {children}
    </div>
  );
};
