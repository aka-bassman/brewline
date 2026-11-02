import { endpoint, internal, None, Public, slice } from "akanjs/signal";

import * as srv from "../srv";

export class SubscriberInternal extends internal(srv.subscriber, ({ interval }) => ({})) {}

export class SubscriberSlice extends slice(
  srv.subscriber,
  { guards: { root: None, get: None, cru: None, create: Public } },
  (init) => ({}),
) {}

export class SubscriberEndpoint extends endpoint(srv.subscriber, ({ query, mutation }) => ({})) {}
