# Workflow

How work gets done on Rihla, whether the person doing it is Mahmoud, Stefano or an AI agent. The goal is simple: **nothing is called done until it has been checked by something other than the author, with evidence.** [`../AGENTS.md`](../AGENTS.md) holds the rules; this file holds the procedure.

## Roles

| Role | Who | Does |
| --- | --- | --- |
| Lead and merger | Mahmoud (`m7devcore`) | Assigns tasks, answers questions, approves human gates, merges pull requests |
| Content and small code tasks | Stefano | Company content, data entry, small well-defined code tasks through pull requests |
| Implementer | Any human or AI agent assigned to the issue | Builds the task, verifies it, opens the pull request |
| Reviewer | A different agent session or person, with fresh context | Checks the diff against the task and the rules. Never the same session that wrote the code. |

## The loop for every task

1. **Pick.** Take the lowest-numbered open task that is assigned to you and not blocked. Its GitHub issue is titled with the plan ID (for example `2.2 Program page`). No issue means no work: ask for one.
2. **Understand.** Read `AGENTS.md`, the task's row in `docs/PLAN.md`, the issue (including its **Sub-tasks** checklist) and anything it links (designs, earlier PRs). Write a two-line restatement of the task and its "Done when" criterion as the first comment on the issue. If it does not match what the issue says, stop and ask.
3. **Branch.** `task/<id>-<short-slug>` from an up-to-date `main`, for example `task/2.2-program-page`.
4. **Build sub-task by sub-task.** Take the issue's sub-tasks in order, one at a time, and tick each box when its check passes. Write the test first for logic (data layer functions, utilities, access control). Commit small, with messages that say why. Stay inside the task's scope. If a sub-task is missing or too big, add or split it in the issue before you start it.
5. **Verify before opening the PR.** Run `pnpm verify`. Run `pnpm build` if routing, config, collections or dependencies changed. For UI, open the running site and check Arabic and English at mobile (about 390 px) and desktop (about 1440 px) against the approved design. Keep the evidence: command output and screenshots.
6. **Open the pull request.** Use the template. Link the issue with `Closes #<number>`. State what you verified and, just as important, what you did not.
7. **Independent review.** A reviewer with fresh context reads the diff, the issue and `AGENTS.md`, runs the checks themselves, and writes findings on the PR. Fix real findings, answer the rest with reasons, and re-request review. Repeat until the reviewer has no open findings.
8. **Human merge.** Mahmoud merges. Required checks (CI) must be green. Merge is a squash merge, with the issue closed by the PR.
9. **Record.** Update `docs/STATUS.md` in the same PR, and write the `Tracker update` line (see [The tracker](#the-tracker)) in the PR and in the issue. If the work changed a plan date or scope, say so in the PR and let Mahmoud update `docs/PLAN.md` and the Arabic copy in Drive.

## Human gates

An agent must stop and get a human decision at these points. Writing the question in the issue is the correct move, not a failure.

| Gate | Decided by |
| --- | --- |
| Merge to `main` | Mahmoud |
| Any change to `src/contract/types.ts` | Mahmoud |
| New dependency, or a version upgrade | Mahmoud |
| A database migration that will run on production | Mahmoud |
| Anything involving secrets, domains, DNS, Cloudflare production settings | Mahmoud |
| A design choice not covered by the approved designs | Mahmoud, and the company if it changes the look |
| Final content approval and launch | The company, through Stefano and Mahmoud |
| Deleting data or files | Mahmoud |

## Evidence standard

Claims in a pull request or issue comment must be backed by something a reviewer can see:

- "Lint, types and tests pass": the `pnpm verify` output, or the green CI check.
- "Matches the design": screenshots of Arabic and English at both widths, next to the design.
- "Bug fixed": a test that fails on the old code and passes on the new.
- "Works on the deployed site": the URL and what was clicked.

If something could not be checked (no device, no access), the PR says so under "Not verified". An honest gap is acceptable. A hidden gap is not.

## Branch protection (on since 2026-11-22)

The ruleset `protect-main` is active on `main`: changes only through a pull request, the `verify` check must pass, one approval from a code owner (Mahmoud) is required, force pushes and deletions are blocked. Mahmoud, as repository admin, can merge his own pull requests. Nobody else, human or agent, can push to `main` or merge without his approval. A direct push was tested and rejected.

## Issues and labels

- One issue per plan task, created from the Task template. Title starts with the ID. Issues #2 to #31 are the 30 tasks of `docs/PLAN.md` (1.1 is #2, 4.8 is #31). Each already has its sub-task checklist.
- Bugs use the Bug template. A bug that must be fixed before launch gets the label `launch-blocker`.
- Useful labels: `phase-1` to `phase-4`, `backend`, `frontend`, `content`, `blocked`, `launch-blocker`, `needs-decision`.
- A blocked task gets the `blocked` label and a comment saying what it waits for and who can unblock it.

## Sub-tasks and getting stuck

Every task issue has a **Sub-tasks** checklist: 4 to 7 small steps, each checkable on its own. This is what keeps an agent from wandering.

- Work one sub-task at a time and tick it only when its check passes.
- If a sub-task fails, try one different fix. If that fails too, **stop**. Comment on the issue with what you tried and the exact error, add the `blocked` label, and wait for a human. Never try a third variation, never loop on a build or test failure, and never change something outside the task to make a check pass.
- If you find the plan or the sub-tasks wrong, say so in the issue and wait. Do not silently do something different.
- Do not mark a sub-task done on the strength of "it should work". Paste the command output or screenshot.

## The tracker

The **Master Tracker** is a spreadsheet owned by Mahmoud (a Claude Sheet, with a read-only snapshot in the Drive folder `00_Project-Management`). It shows every task with owner, due date, status, hours and sub-tasks. It is the dashboard. **The GitHub issue and `docs/STATUS.md` are the source of truth**; the tracker follows them.

After every task, and whenever a status changes (started, blocked, done), the person or agent doing the work writes one line in the issue and in the PR:

```
Tracker update: <task ID> -> <Not started | In progress | Blocked | Done>, <YYYY-MM-DD>, <PR or issue link>, sub-tasks <n of m>
```

Mahmoud, or a Claude session that has the tracker open, applies those lines to the sheet. An agent that cannot reach the sheet does not need to: the line is enough. Mahmoud can ask Claude at any time to "sync the tracker from GitHub", which reads the issues and `docs/STATUS.md` and updates the sheet.

## Weekly rhythm

A short weekly check (proposed: 20 minutes) between Mahmoud and Stefano: what finished, what is next, what is late. `docs/STATUS.md` is the written record. Anything late is reported the day it becomes late.

## Keeping agents on track

- Give an agent one task at a time and the issue link. Do not paste long instructions that duplicate this file.
- If an agent's pull request is large, ask it to split it. Reviews of big diffs are weak reviews.
- If an agent repeats the same failed fix, stop it and look at the problem yourself or rewrite the issue.
- When the plan changes, change the plan file first, then the issues. Agents trust the files.
