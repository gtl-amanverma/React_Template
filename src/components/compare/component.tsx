import { cn } from "../../utils/cn";
import { Compare as CustomCompare } from "./ui";

type props = {
  firstImage: string;
  secondImage: string;
  firstImageClassName: string;
  secondImageClassname: string;
  className: string;
};

const Compare = ({ ...props }: props) => {
  return (
    <div className="p-4 border rounded-3xl dark:bg-neutral-900 bg-neutral-100  border-neutral-200 dark:border-neutral-800 px-4">
      <CustomCompare
        firstImage={props.firstImage}
        secondImage={props.secondImage}
        firstImageClassName={cn(
          "object-cover object-left-top",
          props.firstImageClassName
        )}
        secondImageClassname={cn(
          "object-cover object-left-top",
          props.secondImageClassname
        )}
        className={cn("w-[800px]", props.className)}
        slideMode="hover"
      />
    </div>
  );
};

export default Compare;
