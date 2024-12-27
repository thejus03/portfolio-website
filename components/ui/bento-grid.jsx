import { cn } from "@/lib/utils";
import { LinkPreview } from "./link-preview";

export const BentoGrid = ({
  className,
  children
}) => {
  return (
    (<div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}>
      {children}
    </div>)
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  link
}) => {
  return (
    (<div
      className={cn(
        "row-span-1 rounded-2xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-5 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent flex flex-col",
        className
      )}>
        <LinkPreview className="flex flex-col" url={link}>
          <div className="self-center w-full mt-1">{header}</div>
        <div className="">
          <div className="flex flex-row">

            {icon}
          </div>
          <div
            className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
            {title}
          </div>
          <div
            className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
            {description}
          </div>
        </div>
        </LinkPreview>
      
    </div>)
  );
};
