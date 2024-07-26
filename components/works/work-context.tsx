import { SlideOnView } from "@/components/transition/slide-on-view";
import { cn } from "@/utils/tailwindcss";

interface WorkContextProps {
  className?: string;
  children: React.ReactNode;
}
export const WorkContext = ({ className, children }: WorkContextProps) => {
  return (
    <SlideOnView
      className={cn(
        "bg-primary-50 dark:bg-primary-950/50 rounded-2xl p-6",
        className
      )}>
      {children}
    </SlideOnView>
  );
};
