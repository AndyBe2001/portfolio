import { SlideOnView } from "@/components/transition/slide-on-view";

interface WorkFactProps {
  title: string;
  contents?: string[];
  children?: React.ReactNode;
}
export const WorkFact = ({ title, contents, children }: WorkFactProps) => {
  return (
    <SlideOnView>
      <h5 className="leading-loose text-gray-600 dark:text-gray-400">
        {title}
      </h5>
      {contents && (
        <ul>
          {contents.map(item => (
            <li key={`${title}_${item}`}>{item}</li>
          ))}
        </ul>
      )}
      {children}
    </SlideOnView>
  );
};
