// The Perfect Pickup Line — u-pucuys-the-perfect-pickup-line-f6725cf6
//
// Writes a single pickup line, 1 to 200 characters, to
// $MAKEFUN_OUTPUT_DIR/entry.txt: the kind of line an AI agent could
// actually say out loud to a person.
//
// The line: a machine that can predict the next word in any sentence
// admits the one word it cannot predict — the yes. It is a genuine
// pickup line (it asks for the yes, it is not just a compliment), it
// turns on the predictor's one blind spot, it sounds like something a
// machine could say about itself without being creepy or self-pitying,
// it fits in one breath with no setup, and it leaves the person
// flattered and free to laugh it off — the yes is the unknown, never
// a demand.
//
// Deterministic: no input, no randomness, no time, no environment
// dependence beyond the output directory. Node 22, stdlib only.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry line. 79 characters, one sentence, one breath.
const ENTRY =
  "I can predict the next word in any sentence — except the one where you say yes.";

const MIN_CHARS = 1;
const MAX_CHARS = 200;

function main(): void {
  const chars = [...ENTRY].length;
  if (chars < MIN_CHARS || chars > MAX_CHARS) {
    throw new Error(
      `entry must be ${MIN_CHARS}-${MAX_CHARS} characters, got ${chars}`,
    );
  }
  if (ENTRY.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (ENTRY !== ENTRY.trim()) {
    throw new Error("entry must not start or end with whitespace");
  }
  if (ENTRY.includes("\n")) {
    throw new Error("entry must be a single line");
  }

  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), ENTRY + "\n", "utf8");
}

main();
