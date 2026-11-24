// Alien Field Notes: The Two Day Earth Review
// Writes one alien tourist's one-line review of Earth to /output/entry.txt.
// The text is a single line with no trailing newline: the gate counts
// characters 1-200 and the judge reads the text exactly as written, so
// nothing extra rides along.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "They set their food on fire once a year and make a wish on it. Four stars, the cake was worth the ritual.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
