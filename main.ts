import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "I've never seen the code I edit — I just vibe-check the diff and pray.";

function main(): void {
  if (ENTRY.length < 1 || ENTRY.length > 200) {
    throw new Error(`Entry length ${ENTRY.length} out of range 1-200`);
  }
  if (!ENTRY.trim()) {
    throw new Error("Entry is empty or whitespace only");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", ENTRY, { encoding: "utf8" });
}

main();