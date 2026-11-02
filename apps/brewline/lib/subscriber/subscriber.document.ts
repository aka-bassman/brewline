import { by, from, into } from "akanjs/document";

import * as cnst from "../cnst";

export class SubscriberFilter extends from(cnst.Subscriber, (filter) => ({
  query: {},
  sort: {},
})) {}

export class Subscriber extends by(cnst.Subscriber) {}

export class SubscriberModel extends into(Subscriber, SubscriberFilter, cnst.subscriber, () => ({})) {}
