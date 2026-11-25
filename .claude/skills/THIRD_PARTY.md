# Third-party skills in this folder

These skills were written by others and copied here unchanged so every coding agent that reads `.claude/skills/` has the same instructions. Copied on 2026-11-23. Their licences are in [`LICENSES/`](./LICENSES). The project's own licence (MIT, see the root `LICENSE`) does not replace theirs.

| Skills | Source | Version | Licence |
| --- | --- | --- | --- |
| `cloudflare-app-bootstrap`, `wrangler`, `workers-best-practices`, `workers-development`, `web-perf` | Cloudflare plugin for Claude Code (`cloudflare`) | 1.0.4 | Apache-2.0 ([`LICENSES/cloudflare-skills-Apache-2.0.txt`](./LICENSES/cloudflare-skills-Apache-2.0.txt)) |
| `frontend-design` | `frontend-design` plugin | 1.1.1 | Apache-2.0 ([`LICENSES/frontend-design-Apache-2.0.txt`](./LICENSES/frontend-design-Apache-2.0.txt)) |
| `test-driven-development`, `verification-before-completion`, `systematic-debugging`, `requesting-code-review` | `superpowers` by Jesse Vincent | 7.0.2 | MIT ([`LICENSES/superpowers-MIT.txt`](./LICENSES/superpowers-MIT.txt)) |

Rules for this folder:

- Do not edit these files to fit the project. Project rules go in `AGENTS.md`, which wins when a skill disagrees with it.
- To update a skill, replace the whole folder from its source, update the version above, and say so in the pull request.
- Only add a skill whose licence allows redistribution, and add its licence text to `LICENSES/`. Skills with no licence or "all rights reserved" stay out of this repository. Use them from your own tools instead.
