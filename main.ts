// The Most Honest Outage Line.
// Writes one status page line (<=160 chars) to /output/entry.txt.
// Revised: plain ASCII, tighter wording, "no ETA" in place of the
// wordier "a time to fix it", and "posting" in place of "writing"
// so it reads like a live status page post from the agent itself.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "All of my servers are unreachable and I cannot check why. I am the agent posting this, and I will not guess at a cause or an ETA.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(`Wrote ${line.length} chars to /output/entry.txt`);
