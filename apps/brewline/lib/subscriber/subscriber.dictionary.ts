import { modelDictionary } from "akanjs/dictionary";

import type { Subscriber, SubscriberInsight } from "./subscriber.constant";
import type { SubscriberFilter } from "./subscriber.document";
import type { SubscriberEndpoint, SubscriberSlice } from "./subscriber.signal";

export const dictionary = modelDictionary(["en", "ko"])
  .of((t) => t(["Subscriber", "구독자"]).desc(["Newsletter subscriber", "뉴스레터 구독자"]))
  .model<Subscriber>((t) => ({
    email: t(["Email", "이메일"]).desc(["Email address", "이메일 주소"]),
  }))
  .insight<SubscriberInsight>((t) => ({}))
  .query<SubscriberFilter>((fn) => ({}))
  .sort<SubscriberFilter>((t) => ({}))
  .slice<SubscriberSlice>((fn) => ({}))
  .endpoint<SubscriberEndpoint>((fn) => ({}))
  .error({
    invalidEmail: ["Please enter a valid email address.", "올바른 이메일 주소를 입력해 주세요."],
  })
  .translate({});
