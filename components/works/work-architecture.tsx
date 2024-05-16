import { cn } from "@/utils/tailwindcss";
import { SlideOnView } from "../transition/slide-on-view";

interface WorkArchitectureProps {
  className?: string;
  children: React.ReactNode;
}
export const WorkArchitecture = ({
  className,
  children,
}: WorkArchitectureProps) => {
  return (
    <SlideOnView
      className={cn(
        "bg-primary-50/50 dark:bg-primary-950/50 rounded-2xl border p-4",
        className
      )}>
      {children}
    </SlideOnView>
  );
};
