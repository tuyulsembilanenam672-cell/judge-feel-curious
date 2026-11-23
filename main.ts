// The Warm Key — entry for "Make the AI judge feel curious".
// A calm, concrete little mystery: one lighthouse, one shell, one key.
// The program writes a single short text to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const text =
  "The lighthouse keeper leaves the light on every night, though no ship " +
  "has passed in eleven years. Each month, someone leaves one white shell " +
  "on the top step. He has never stayed up to see who. Tonight the shell " +
  "is gone. In its place: a small brass key, still warm.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");

const points = [...text].length;
console.log(`wrote ${points} code points to /output/entry.txt`);
