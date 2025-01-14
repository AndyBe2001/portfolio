import { cn } from "@/utils/tailwindcss";

interface WorkArchitectureProps {
  className?: string;
  children: React.ReactNode;
}
export const WorkArchitecture = ({
  className,
  children,
}: WorkArchitectureProps) => {
  return (
    <div
      className={cn(
        "bg-primary-50/50 dark:bg-primary-950/50 rounded-2xl p-4",
        className
      )}>
      {children}
    </div>
  );
};
