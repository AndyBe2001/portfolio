import { SlideOnView } from "@/components/transition/slide-on-view";

export const WorkTitle = ({ children }: { children: React.ReactNode }) => (
  <SlideOnView className="mb-5 text-center text-4xl">{children}</SlideOnView>
);
