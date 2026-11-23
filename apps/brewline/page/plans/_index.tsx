import { jellyButtonRecipe } from "@apps/brewline/ui";
import { cn, page, usePage } from "akanjs/client";
import { Link } from "akanjs/ui";

export default page().render(() => {
  const { l } = usePage();
  const plans = [
    {
      name: l.trans({ en: "Starter", ko: "스타터" }),
      bags: l.trans({ en: "1 × 250g", ko: "1 × 250g" }),
      every: l.trans({ en: "every 4 weeks", ko: "4주마다" }),
      price: "$16",
      popular: false,
    },
    {
      name: l.trans({ en: "Regular", ko: "레귤러" }),
      bags: l.trans({ en: "2 × 250g", ko: "2 × 250g" }),
      every: l.trans({ en: "every 2 weeks", ko: "2주마다" }),
      price: "$29",
      popular: true,
    },
    {
      name: l.trans({ en: "Office", ko: "오피스" }),
      bags: l.trans({ en: "4 × 1kg", ko: "4 × 1kg" }),
      every: l.trans({ en: "every 2 weeks", ko: "2주마다" }),
      price: "$98",
      popular: false,
    },
  ];
  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-12 text-foreground">
      <header className="text-center">
        <h1 className="font-black text-4xl">{l.trans({ en: "Plans", ko: "구독 플랜" })}</h1>
        <p className="mt-3 text-foreground/60 text-sm">
          {l.trans({
            en: "Choose how much coffee and how often.",
            ko: "원두의 양과 배송 주기를 선택하세요.",
          })}
        </p>
      </header>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {plans.map((plan) => (
          <article
            className={cn("jelly-glass flex flex-col rounded-box p-6", plan.popular && "ring-2 ring-primary")}
            key={plan.name}
          >
            <div className="flex items-center justify-between gap-3">
              <h2 className="font-black text-xl">{plan.name}</h2>
              {plan.popular ? (
                <span className="jelly tint-primary rounded-full px-2.5 py-1 font-bold text-[11px] text-primary-foreground">
                  {l.trans({ en: "Most popular", ko: "가장 인기" })}
                </span>
              ) : null}
            </div>
            <p className="mt-5 text-foreground/70 text-sm">{plan.bags}</p>
            <p className="mt-1 text-foreground/70 text-sm">{plan.every}</p>
            <p className="mt-6 font-black text-4xl">{plan.price}</p>
            <Link className={jellyButtonRecipe({ size: "lg" }, "mt-6 w-full")} href="/plans">
              {l.trans({ en: "Choose", ko: "선택하기" })}
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
});
