import { type cnst, usePage } from "@apps/brewline/client";
import type { ModelProps } from "akanjs/client";
import { Link } from "akanjs/ui";

export const Card = ({ subscriber, href }: ModelProps<"subscriber", cnst.LightSubscriber>) => {
  const { l } = usePage();
  return (
    <Link href={href} className="w-full">
      <div>
        {l("subscriber.email")}: {subscriber.email}
      </div>
    </Link>
  );
};
