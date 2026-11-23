import { jellyButtonRecipe } from "@apps/brewline/ui";
import { cn, page, usePage } from "akanjs/client";
import { Link } from "akanjs/ui";

const numeralTiles = [
  "tint-planet text-white",
  "tint-rocket text-black/70",
  "tint-moon text-black/70",
  "tint-comet text-white",
] as const;

export default page().render(() => {
  const { l } = usePage();
  const chapters = [
    {
      numeral: "1",
      title: l.trans({ en: "The line you write.", ko: "당신이 쓰는 한 줄." }),
      body: l.trans({
        en: "A field is one declaration — a name and a type. The database, API, screens and agent tools all come from it.",
        ko: "필드는 이름과 타입, 선언 한 줄입니다. DB, API, 화면, 에이전트 도구가 모두 이 한 줄에서 나옵니다.",
      }),
    },
    {
      numeral: "×8",
      title: l.trans({ en: "Through every layer.", ko: "모든 레이어를 관통하고," }),
      body: l.trans({
        en: "Schema, query, service, API, fetch, client type, state and UI change together. Nothing to chase, nothing to miss.",
        ko: "스키마, 쿼리, 서비스, API, fetch, 클라이언트 타입, 상태, UI가 함께 바뀝니다. 따라 고칠 곳도 빠뜨릴 곳도 없습니다.",
      }),
    },
    {
      numeral: "×6",
      title: l.trans({ en: "Onto every platform.", ko: "모든 플랫폼에 닿고," }),
      body: l.trans({
        en: "The same code ships as SEO-ready web, iOS and Android apps, and macOS, Windows and Linux desktop apps.",
        ko: "같은 코드가 SEO 웹, iOS·Android 앱, macOS·Windows·Linux 데스크톱 앱으로 배포됩니다.",
      }),
    },
    {
      numeral: "×2",
      title: l.trans({ en: "For people and agents alike.", ko: "사람과 에이전트 모두에게." }),
      body: l.trans({
        en: "Guarded endpoints become MCP tools and on-screen controls become in-page agent tools, behind the same guards people pass.",
        ko: "가드를 거친 엔드포인트는 MCP 도구가, 화면의 컨트롤은 인페이지 에이전트 도구가 됩니다. 사람과 같은 가드를 거쳐서요.",
      }),
    },
  ];
  const faqs = [
    {
      q: l.trans({ en: "When does my coffee ship?", ko: "커피는 언제 배송되나요?" }),
      a: l.trans({
        en: "Every other Monday, roasted the Friday before.",
        ko: "격주 월요일마다 배송되며, 그 전주 금요일에 로스팅합니다.",
      }),
    },
    {
      q: l.trans({ en: "Can I pause?", ko: "일시 정지할 수 있나요?" }),
      a: l.trans({
        en: "Yes, skip any delivery up to 3 days before it ships.",
        ko: "네, 배송 3일 전까지는 어떤 배송이든 건너뛸 수 있습니다.",
      }),
    },
    {
      q: l.trans({ en: "How do I cancel?", ko: "해지는 어떻게 하나요?" }),
      a: l.trans({
        en: "One click in your account, no phone call, no fee.",
        ko: "계정에서 클릭 한 번으로 끝납니다. 전화도 수수료도 없습니다.",
      }),
    },
  ];
  const steps = [
    {
      title: l.trans({ en: "Make this page yours", ko: "이 페이지를 바꿔 보세요" }),
      body: l.trans({
        en: "This welcome screen is an ordinary page. Replace it with the first screen of your product.",
        ko: "이 환영 화면은 평범한 페이지입니다. 제품의 첫 화면으로 바꿔 보세요.",
      }),
      code: "page/_index.tsx",
    },
    {
      title: l.trans({ en: "Restyle the theme", ko: "테마를 바꿔 보세요" }),
      body: l.trans({
        en: "Swap the palette tokens, and every surface and button follows.",
        ko: "팔레트 토큰을 바꾸면 모든 표면과 버튼이 따라옵니다.",
      }),
      code: "page/styles.css",
    },
    {
      title: l.trans({ en: "Add a feature", ko: "기능을 추가해 보세요" }),
      body: l.trans({
        en: "One command scaffolds a domain module — model, service, API, store and UI.",
        ko: "명령 하나로 도메인 모듈(모델, 서비스, API, 스토어, UI)을 만듭니다.",
      }),
      code: "akan create-module <name>",
    },
    {
      title: l.trans({ en: "Read the sample module", ko: "샘플 모듈을 읽어 보세요" }),
      body: l.trans({
        en: "The task module walks one feature end to end — the model, its guarded API, the store and the pages.",
        ko: "task 모듈이 모델부터 가드가 걸린 API, 스토어, 페이지까지 기능 하나를 처음부터 끝까지 보여 줍니다.",
      }),
      code: "lib/task",
      href: "/task",
    },
    {
      title: l.trans({ en: "Connect an agent", ko: "에이전트를 연결해 보세요" }),
      body: l.trans({
        en: "Every guarded endpoint is already published as an MCP tool.",
        ko: "가드가 걸린 엔드포인트는 이미 MCP 도구로 공개되어 있습니다.",
      }),
      code: "POST /mcp",
      href: "https://akanjs.com/docs/arch/agentic",
    },
  ];
  return (
    <main className="relative min-h-screen overflow-x-clip break-keep text-foreground">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-6 lg:px-8">
        <section className="flex min-h-[calc(100svh-5rem)] flex-col items-center justify-center py-12 text-center">
          <div className="flex w-full max-w-2xl flex-col items-center">
            <h1 className="max-w-full text-balance font-black text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
              Fresh roast, at your door every two weeks
            </h1>
            <p className="mt-6 max-w-xl text-balance text-foreground/70 text-lg leading-8 sm:text-xl">
              Small-batch beans from three roasters we trust. Pause or cancel anytime.
            </p>
            <Link className={jellyButtonRecipe({ size: "lg" }, "mt-10")} href="/plans">
              Start my subscription
            </Link>
          </div>
        </section>

        <section className="py-12">
          <p className="font-bold text-primary text-sm">{l.trans({ en: "How it works", ko: "작동 방식" })}</p>
          <h2 className="mt-2 font-black text-3xl sm:text-4xl">
            {l.trans({ en: "One line reaches the whole product.", ko: "한 줄이 제품 전체에 닿습니다." })}
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {chapters.map((chapter, idx) => (
              <article className="jelly-glass rounded-box p-6" key={chapter.numeral}>
                <span
                  className={cn(
                    "jelly flex size-12 items-center justify-center rounded-2xl font-black text-xl",
                    numeralTiles[idx],
                  )}
                >
                  {chapter.numeral}
                </span>
                <h3 className="mt-5 font-bold text-lg">{chapter.title}</h3>
                <p className="mt-2 text-foreground/60 text-sm leading-6">{chapter.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="py-12">
          <p className="font-bold text-primary text-sm">{l.trans({ en: "Next steps", ko: "다음 단계" })}</p>
          <h2 className="mt-2 font-black text-3xl sm:text-4xl">
            {l.trans({ en: "Start here.", ko: "여기서 시작하세요." })}
          </h2>
          <ol className="jelly-glass mt-8 divide-y divide-foreground/8 rounded-box">
            {steps.map((step, idx) => (
              <li className="flex items-start gap-4 p-5 sm:p-6" key={step.code}>
                <span className="jelly tint-primary flex size-9 shrink-0 items-center justify-center rounded-full font-black text-primary-foreground text-sm">
                  {idx + 1}
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="font-bold">{step.title}</h3>
                  <p className="mt-1 text-foreground/60 text-sm leading-6">{step.body}</p>
                  <code className="mt-2 inline-block rounded-full bg-foreground/6 px-3 py-1 font-mono text-foreground/75 text-xs">
                    {step.code}
                  </code>
                </div>
                {step.href ? (
                  <Link
                    aria-label={step.title}
                    className={jellyButtonRecipe({ variant: "ghost", size: "icon" }, "shrink-0 self-center")}
                    href={step.href}
                    target={step.href.startsWith("http") ? "_blank" : undefined}
                  >
                    →
                  </Link>
                ) : null}
              </li>
            ))}
          </ol>
        </section>

        <section className="py-12">
          <p className="font-bold text-primary text-sm">{l.trans({ en: "FAQ", ko: "자주 묻는 질문" })}</p>
          <h2 className="mt-2 font-black text-3xl sm:text-4xl">
            {l.trans({ en: "Shipping, pausing, cancelling", ko: "배송, 일시 정지, 해지" })}
          </h2>
          <div className="jelly-glass mt-8 divide-y divide-foreground/8 rounded-box">
            {faqs.map((faq, idx) => (
              <details className="group p-5 sm:p-6" key={idx}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold [&::-webkit-details-marker]:hidden">
                  {faq.q}
                  <span className="shrink-0 text-foreground/45 text-xl leading-none transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-foreground/60 text-sm leading-6">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        <footer className="py-10 text-center text-foreground/45 text-sm">
          {l.trans({ en: "Made with Akan.js · Powered by Bun", ko: "Akan.js로 만들고 Bun으로 구동합니다" })}
        </footer>
      </div>
    </main>
  );
});
