"use client";

import { st } from "@apps/brewline/client";
import { cn, usePage } from "akanjs/client";
import { isEmail } from "akanjs/common";
import { Input } from "akanjs/ui";
import { useState } from "react";
import { jellyButtonRecipe } from "./Recipe";

interface NewsletterSignupProps {
  className?: string;
}

export const NewsletterSignup = ({ className }: NewsletterSignupProps) => {
  const { l } = usePage();
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "error" | "done">("idle");

  const submit = async () => {
    const value = email.trim();
    if (!isEmail(value)) {
      setState("error");
      return;
    }
    try {
      await st.do.createSubscriber({ email: value });
      setState("done");
    } catch {
      setState("error");
    }
  };

  return (
    <div className={cn("flex flex-col items-center gap-3", className)}>
      <p className="font-bold text-foreground/75 text-sm">
        {l.trans({ en: "Get our monthly roast notes", ko: "월간 로스팅 노트를 받아 보세요" })}
      </p>
      <form
        className="flex w-full max-w-sm items-start gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          submit();
        }}
      >
        <Input.Email
          className="flex-1"
          placeholder={l.trans({ en: "you@example.com", ko: "you@example.com" })}
          validate={() => true}
          value={email}
          onChange={(value) => {
            setEmail(value);
            setState("idle");
          }}
          onPressEnter={submit}
        />
        <button className={jellyButtonRecipe({ variant: "primary", size: "md" })} type="submit">
          {l.trans({ en: "Subscribe", ko: "구독하기" })}
        </button>
      </form>
      {state === "error" ? (
        <p className="text-destructive text-sm">
          {l.trans({ en: "Please enter a valid email address.", ko: "올바른 이메일 주소를 입력해 주세요." })}
        </p>
      ) : null}
      {state === "done" ? (
        <p className="text-sm text-success">
          {l.trans({ en: "Thanks, see you next roast!", ko: "고마워요, 다음 로스팅에서 만나요!" })}
        </p>
      ) : null}
    </div>
  );
};
