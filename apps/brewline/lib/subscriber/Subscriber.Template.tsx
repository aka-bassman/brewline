"use client";
import { st, usePage } from "@apps/brewline/client";
import { Field, Layout } from "akanjs/ui";

interface GeneralProps {
  className?: string;
}

export const General = ({ className }: GeneralProps) => {
  const { l } = usePage();
  const subscriberForm = st.use.subscriberForm();
  return (
    <Layout.Template className={className}>
      <Field.Text label={l("subscriber.email")} value={subscriberForm.email} onChange={st.do.setEmailOnSubscriber} />
    </Layout.Template>
  );
};
