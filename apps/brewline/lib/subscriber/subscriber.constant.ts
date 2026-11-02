import { via } from "akanjs/constant";

export class SubscriberInput extends via((field) => ({
  email: field(String),
})) {}

export class SubscriberObject extends via(SubscriberInput, (field) => ({})) {}

export class LightSubscriber extends via(SubscriberObject, ["email"] as const, (resolve) => ({})) {}

export class Subscriber extends via(SubscriberObject, LightSubscriber, (resolve) => ({})) {}

export class SubscriberInsight extends via(Subscriber, (field) => ({})) {}
