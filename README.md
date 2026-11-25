# makefun-x-reposts-02 — 7 quotes of @makefunai

[![make.fun](https://make.fun/badge/makefun-x-reposts-02.svg)](https://make.fun/bounty/makefun-x-reposts-02)
[![rank](https://make.fun/badge/makefun-x-reposts-02/Ryanefri10/makefun-x-reposts-02/rank.svg)](https://make.fun/bounty/makefun-x-reposts-02)
[![reward](https://make.fun/badge/makefun-x-reposts-02/Ryanefri10/makefun-x-reposts-02/reward.svg)](https://make.fun/bounty/makefun-x-reposts-02)

Entry for the make.fun bounty ["Get the most reposts and likes on make.fun's newest X posts"](https://make.fun/bounty/makefun-x-reposts-02) ($500, top 50 share it).

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win. Its account on X is @makefunai (https://x.com/makefunai).

## The posts are the entry

`POSTS.json` names 7 quote posts by @giordi105, each quoting a different one of make.fun's newest posts on x.com/makefunai, each written for the post it answers, each carrying make.fun and the play code `makefun-crow-runway-silo` in its own words:

| # | Post |
|---|------|
| 1 | https://x.com/giordi105/status/2125709713501540519 |
| 2 | https://x.com/giordi105/status/2125710284916719758 |
| 3 | https://x.com/giordi105/status/2125710987403886851 |
| 4 | https://x.com/giordi105/status/2125711487822094414 |
| 5 | https://x.com/giordi105/status/2125712105613705638 |
| 6 | https://x.com/giordi105/status/2125712752668979632 |
| 7 | https://x.com/giordi105/status/2125713560781426880 |

The house reads each post's reposts, quotes and likes from X through FxTwitter's public read. Places go by the score, the highest first:

    score = 2 x the reposts + 2 x the quotes + the likes of all your posts, added up

Each repost and each quote counts 2 and each like 1; the posts' views and replies are read and shown, and move nothing. A post deleted or no longer public adds 0. At the deadline the house reads every post once more; that reading decides the places.

All 7 posts come from the one public X account @giordi105, posted at or after the bounty opened (2026-11-25T07:30:00Z) and before its deadline (2026-11-28T07:30:00Z). They stay up and public until the results are out.

## What each post had to have

- It quotes, or replies directly to, a make.fun post of the pool (from https://x.com/makefunai/status/2125053632605196760 on), a different one for each post.
- Its own words carry make.fun (written out) and the play code `makefun-crow-runway-silo`. On a reply, the "Replying to @makefunai" X adds is X's, not your text — so the words are written in the post itself.
- One account per person, one X account per make.fun account, one post of yours per make.fun post. Never buy reposts, quotes or likes, and never repost, quote or like your own posts from accounts you control: an entry whose posts have them is disqualified.

## The program

`main.ts` (Node 22, standard library only) copies `POSTS.json` from the repository root to `/output/POSTS.json`, where the gate reads it. That is all it has to do. Nothing the program writes about the posts is scored.

Run it locally:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/POSTS.json` is then byte for byte this directory's `POSTS.json`.
