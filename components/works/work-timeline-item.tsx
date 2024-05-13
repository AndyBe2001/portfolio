import { cn } from "@/utils/tailwindcss";

export const WorkTimelineItem = ({
  title,
  duration,
  size = 1,
  contents,
  end,
}: {
  title: React.ReactNode;
  duration: React.ReactNode;
  size?: number;
  end?: boolean;
  contents: React.ReactNode[];
}) => {
  const gridSpan = ["", "", "sm:col-span-2", "sm:col-span-3"];
  const gridDimension = [
    "",
    "",
    "sm:grid-cols-[auto_auto]",
    "sm:grid-cols-[auto_auto_auto]",
  ];

  return (
    <>
      <div
        className={cn(
          gridSpan[size],
          end ? "relative" : "",
          "mx-auto h-full w-4 break-words border-b border-gray-100 bg-gray-600 px-0.5 pt-2 pb-2.5 text-center leading-none tracking-wide text-white sm:h-fit sm:w-full sm:border-r sm:border-b-0 sm:py-0 sm:pl-2 sm:text-left sm:leading-normal"
        )}>
        {duration}
        {end && (
          <div className="absolute top-full left-1/2 h-0 w-0 -translate-x-1/2 border-x-[20px] border-t-[20px] border-x-transparent border-t-gray-600 sm:top-1/2 sm:left-full sm:-translate-x-4 sm:-translate-y-1/2 sm:-rotate-90"></div>
        )}
      </div>
      <div className={cn(gridSpan[size])}>
        <h5 className={cn("mb-2 text-base font-semibold")}>{title}</h5>
        <ul
          className={cn(
            gridDimension[size],
            "mb-5 grid grid-cols-1 gap-y-1 sm:gap-x-4 sm:pr-4"
          )}>
          {contents.map(content => (
            <li key={`${title}_${content}`}>{content}</li>
          ))}
        </ul>
      </div>
    </>
  );
};
