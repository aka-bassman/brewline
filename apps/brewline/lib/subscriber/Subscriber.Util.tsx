"use client";
import { fetch, usePage } from "@apps/brewline/client";
import { Model } from "akanjs/ui";

interface RemoveProps {
  subscriberId: string;
}
export const Remove = ({ subscriberId }: RemoveProps) => {
  const { l } = usePage();
  return (
    <Model.Remove modelId={subscriberId} slice={fetch.slice.subscriber}>
      {l("base.remove")}
    </Model.Remove>
  );
};
