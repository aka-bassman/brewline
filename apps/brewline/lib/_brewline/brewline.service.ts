
import { serve } from "akanjs/service";

export class BrewlineService extends serve("brewline" as const, { serverMode: "batch" }, () => ({})) {}
