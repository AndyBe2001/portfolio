import {
  FontAwesomeIcon,
  type FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";

import { SlideOnView } from "@/components/transition/slide-on-view";

interface WorkFeatureProps {
  icon: FontAwesomeIconProps["icon"];
  children: React.ReactNode;
}
export const WorkFeature = ({ icon, children }: WorkFeatureProps) => (
  <SlideOnView className="bg-primary-50 dark:bg-primary-950/50 flex h-48 w-48 flex-col items-center rounded-2xl border px-4">
    <FontAwesomeIcon icon={icon} className="mt-10 text-6xl" />
    <span className="mt-3 text-center font-semibold">{children}</span>
  </SlideOnView>
);
