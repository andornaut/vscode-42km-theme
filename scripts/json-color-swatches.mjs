import { readFileSync, mkdirSync, writeFileSync } from "fs";

const outDir = process.argv[2];
if (!outDir) {
  console.error("Usage: node json-color-swatches.mjs <out-dir> [file...]");
  process.exit(1);
}

const files = process.argv.slice(3);
if (files.length === 0) {
  console.error("Error: at least one JSON file is required");
  process.exit(1);
}

const hexPattern = /(?<=["'\s])#([0-9a-fA-F]{3,8})\b/g;
const colors = new Map();

function expand(hex) {
  if (hex.length === 3) return hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  if (hex.length === 4) return hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2] + hex[3] + hex[3];
  return hex;
}

for (const file of files) {
  const content = readFileSync(file, "utf-8");
  for (const match of content.matchAll(hexPattern)) {
    const raw = match[1].toLowerCase();
    if (raw.length === 5 || raw.length === 7) continue;
    const expanded = expand(raw);
    colors.set(expanded, true);
  }
}

mkdirSync(outDir, { recursive: true });

for (const hex of colors.keys()) {
  const rgb = hex.slice(0, 6);
  const alpha = hex.length === 8 ? hex.slice(6) : "ff";
  const opacity = parseInt(alpha, 16) / 255;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><rect width="16" height="16" rx="3" fill="#${rgb}" opacity="${opacity}" stroke="#555" stroke-width="1"/></svg>`;
  writeFileSync(`${outDir}/${hex}.svg`, svg);
}

console.log(`Generated ${colors.size} swatches in ${outDir}/`);
