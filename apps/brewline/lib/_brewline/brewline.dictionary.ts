
import { serviceDictionary } from "akanjs/dictionary";

import type { BrewlineEndpoint } from "./brewline.signal";

export const dictionary = serviceDictionary(["en", "ko"])
  .endpoint<BrewlineEndpoint>((fn) => ({}))
  .translate({});
