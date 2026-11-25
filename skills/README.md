# rihla skills

Short instruction files for coding agents (and a handy reference for people). This folder is a visible copy of `.claude/skills/`, which is the copy Claude Code loads. The two must stay identical: `pnpm test` fails if they differ.

- Which skill to use, and when: see the Skills section in [`AGENTS.md`](../AGENTS.md).
- Where each skill comes from and its licence: [`THIRD_PARTY.md`](./THIRD_PARTY.md) and [`LICENSES/`](./LICENSES).
- Each skill is a folder with a `SKILL.md`. Open it and read it before the step it covers.

To use them in your own Claude Code on any project, copy the skill folders into `~/.claude/skills/` (macOS and Linux) or `%USERPROFILE%\.claude\skills\` (Windows), keep `LICENSES/` with them, and restart Claude Code.

To change a skill, replace the whole folder in both places from its source (see `THIRD_PARTY.md`).
