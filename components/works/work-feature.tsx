import {
  FontAwesomeIcon,
  type FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";

interface WorkFeatureProps {
  icon: FontAwesomeIconProps["icon"];
  children: React.ReactNode;
}
export const WorkFeature = ({ icon, children }: WorkFeatureProps) => (
  <div className="bg-primary-50 dark:bg-primary-950/50 flex h-48 w-48 flex-col items-center rounded-2xl px-4">
    <FontAwesomeIcon icon={icon} className="mt-10 text-6xl" />
    <span className="mt-3 text-center font-semibold">{children}</span>
  </div>
);
