import { seededRandom } from "./rng";

export class SeededChunks {
  private blocks = new Map<string, number>();
  constructor(seed = 1337, private readonly rng: () => number = seededRandom(seed)) {}
  at(x: number, y: number, z: number): number {
    const key = x + "," + y + "," + z;
    if (!this.blocks.has(key)) this.blocks.set(key, this.rng() < 0.2 ? 1 : 0);
    return this.blocks.get(key)!;
  }
  set(x: number, y: number, z: number, v: number): void { this.blocks.set(x + "," + y + "," + z, v); }
  reach(from: [number, number, number], to: [number, number, number], max = 5): boolean {
    const d = Math.hypot(to[0] - from[0], to[1] - from[1], to[2] - from[2]);
    return d <= max;
  }
}