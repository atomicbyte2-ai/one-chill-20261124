// SPDX-License-Identifier: MIT
// One Line, One Chill — a single horror line in a calm, unbothered voice.
// The narrator tells the ghost to chill, and the ghost obeys —
// which is exactly the problem. The scare is earned, not announced:
// a concrete image (armchair, my face) and a last word that lands.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I told the ghost to chill, so it did — now it sits in my armchair wearing my face, waiting for me to blink.";

// Gate: exactly one line, 1-200 chars, no trailing newline.
// Checked before any write, so a bad line can never reach entry.txt.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`line must be 1-200 chars, got ${LINE.length}`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("line must be exactly one line");
}
if (LINE.trim().length === 0) {
  throw new Error("line must not be only whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
