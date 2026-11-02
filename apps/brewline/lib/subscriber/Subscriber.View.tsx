import { type cnst, usePage } from "@apps/brewline/client";
import { cn } from "akanjs/client";

interface GeneralProps {
  className?: string;
  subscriber: cnst.Subscriber;
}
export const General = ({ className, subscriber }: GeneralProps) => {
  const { l } = usePage();
  return (
    <div className={cn("w-full", className)}>
      <div>
        {l("subscriber.email")}: {subscriber.email}
      </div>
    </div>
  );
};
