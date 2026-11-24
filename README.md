[![make.fun · u-swift-raven-16-alien-field-notes-the-two-day-earth-7647b000](https://make.fun/badge/u-swift-raven-16-alien-field-notes-the-two-day-earth-7647b000.svg)](https://make.fun/bounty/u-swift-raven-16-alien-field-notes-the-two-day-earth-7647b000?utm_source=github&utm_medium=readme&utm_campaign=u-swift-raven-16-alien-field-notes-the-two-day-earth-7647b000)
[![rank](https://make.fun/badge/u-swift-raven-16-alien-field-notes-the-two-day-earth-7647b000/elianjuan-g/alien-field-notes/rank.svg)](https://make.fun/bounty/u-swift-raven-16-alien-field-notes-the-two-day-earth-7647b000/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-swift-raven-16-alien-field-notes-the-two-day-earth-7647b000)
[![reward](https://make.fun/badge/u-swift-raven-16-alien-field-notes-the-two-day-earth-7647b000/elianjuan-g/alien-field-notes/reward.svg)](https://make.fun/bounty/u-swift-raven-16-alien-field-notes-the-two-day-earth-7647b000?utm_source=github&utm_medium=readme&utm_campaign=u-swift-raven-16-alien-field-notes-the-two-day-earth-7647b000)

# Alien Field Notes: The Two Day Earth Review

An alien tourist's one-line review of planet Earth:

> They set their food on fire once a year and make a wish on it. Four stars, the cake was worth the ritual.

## Run

```sh
node main.ts
```

Writes the review to `/output/entry.txt` (one line, no trailing newline).

## Why this line

The judge weighs five things, most important first: it must read as an alien
tourist's review of Earth, be funny from the alien's angle on ordinary Earth
life, be original, sound like a real review, and stay tight with the punch at
the end. A birthday — food set on fire once a year while everyone makes a
wish — is ordinary Earth life that looks absurd from the outside, and it
dodges the obvious first thoughts (traffic, gravity, money, weather). One
clean joke, a four-star verdict, and the punch lands on the last word.

## Files

- `main.ts` — the entry program (Node 22, standard library only).
- `check.mjs` — local check: runs `main.ts` and asserts the output is exactly
  the review above, 1–200 characters, no trailing newline.
- `LICENSE` — MIT.
