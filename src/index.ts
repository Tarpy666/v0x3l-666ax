// V0X3L-666AX — clean-room voxel-sandbox. Deterministic by construction.
// Inspiration (mechanics only, not source material): voxel sandbox conventions (place, break, seeded worlds)
// Target engine for the render layer: three-js (see docs/BUILD_PLAN.md).

import { seededRandom } from "./rng";
import { SeededChunks } from "./archetype";

export const SPEC = "voxel sandbox conventions (place, break, seeded worlds)";
export const MODULES = [{ id: "SeededChunks", name: "V0X3L-666AX :: SeededChunks" }];
export { seededRandom };
