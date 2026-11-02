"use client";
import { type cnst, Subscriber } from "@apps/brewline/client";
import type { ClientInit, ClientView, SliceMeta } from "akanjs/fetch";
import { Load } from "akanjs/ui";

interface CardProps {
  className?: string;
  init: ClientInit<"subscriber", cnst.LightSubscriber>;
  slice?: SliceMeta;
}
export const Card = ({ className, init, slice }: CardProps) => {
  return (
    <Load.Units
      className={className}
      init={init}
      renderItem={(subscriber) => (
        <Subscriber.Unit.Card key={subscriber.id} href={`/subscriber/${subscriber.id}`} subscriber={subscriber} />
      )}
    />
  );
};

interface ViewProps {
  className?: string;
  view: ClientView<"subscriber", cnst.Subscriber>;
}
export const View = ({ view }: ViewProps) => {
  return <Load.View view={view} renderView={(subscriber) => <Subscriber.View.General subscriber={subscriber} />} />;
};
