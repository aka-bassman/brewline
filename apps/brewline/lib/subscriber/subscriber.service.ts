import { isEmail } from "akanjs/common";
import type { DataInputOf } from "akanjs/document";
import { serve } from "akanjs/service";

import * as db from "../db";
import { Err } from "../dict";

export class SubscriberService extends serve(db.subscriber, ({ use, service }) => ({})) {
  override _preCreate(
    data: DataInputOf<db.SubscriberInput, db.Subscriber>,
  ): DataInputOf<db.SubscriberInput, db.Subscriber> {
    const email = data.email.trim();
    if (!isEmail(email)) throw new Err("subscriber.error.invalidEmail");
    return { ...data, email };
  }
}
