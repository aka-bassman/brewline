
import { endpoint, internal } from "akanjs/signal";

import * as srv from "../srv";

export class BrewlineInternal extends internal(srv.brewline, () => ({})) {}

export class BrewlineEndpoint extends endpoint(srv.brewline, () => ({})) {}
  