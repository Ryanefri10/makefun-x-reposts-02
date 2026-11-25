// makefun-x-reposts-02 entry (Node 22, standard library only): it copies POSTS.json
// from the repository root to /output/POSTS.json, where the gate reads it. That is
// all the program has to do. The entry is the posts themselves: 7 quote posts of
// @giordi105, each quoting a different one of make.fun's newest posts on X, each
// carrying make.fun and the play code makefun-crow-runway-silo in its own words.
// The house reads their reposts, quotes and likes from X; nothing this program
// writes about the posts is scored. The 7 posts in POSTS.json were all posted
// live on 2026-11-26 from the one account @giordi105 before this program ran.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand in
// for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'POSTS.json'), join(OUTPUT_DIR, 'POSTS.json'));
} catch (err) {
  console.error(`POSTS.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
