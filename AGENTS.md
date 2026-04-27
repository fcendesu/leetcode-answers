# Repository Guidelines

## Project Structure & Module Organization
This repository stores LeetCode solutions by language.

- `typescript/`: Bun + TypeScript solutions.
- `typescript/src/`: One problem per file, named `<id>.<kebab-name>.ts` (example: `20.valid-parentheses.ts`).
- `rust/`: Cargo workspace for Rust solutions.
- `rust/src/bin/`: Rust problem files using the same `<id>.<kebab-name>.rs` pattern.
- `rust/src/lib.rs`: Shared Rust helpers and unit tests.
- `README.MD`: High-level usage notes.

## Build, Test, and Development Commands
Run commands from the language folder unless noted.

- `cd typescript && bun install`: Install TypeScript dependencies.
- `cd typescript && bun run index.ts`: Run the Bun entry file.
- `cd typescript && bun run src/1.two-sum.ts`: Execute a specific TypeScript solution file.
- `cd rust && cargo run`: Run default Rust binary (`src/bin/main.rs`).
- `cd rust && cargo run --bin 20.valid-parentheses`: Run a specific Rust solution binary.
- `cd rust && cargo test`: Run Rust unit tests.

## Coding Style & Naming Conventions
- TypeScript: 2-space indentation, `strict` typing (`typescript/tsconfig.json`), camelCase function names.
- Rust: Standard `rustfmt` style (4 spaces), snake_case function names.
- Keep one LeetCode problem per file and preserve LeetCode metadata comments (`@lc ...`) at the top.
- Use lowercase kebab-case problem slugs in filenames after the numeric id.

## Testing Guidelines
- Primary automated tests currently live in Rust (`#[cfg(test)]` in `rust/src/lib.rs`).
- Add focused `#[test]` cases when introducing shared Rust utilities or non-trivial logic.
- Run `cargo test` before opening a PR.
- TypeScript files are mostly solution snippets; validate by running the target file with Bun.

## Commit & Pull Request Guidelines
- Follow Conventional Commit style used in history: `feat: ...`, `refactor: ...`, `chore: ...`.
- Keep commit scope narrow (ideally one problem or one refactor per commit).
- PRs should include:
  - Short summary of problems/files changed.
  - Any behavior or complexity notes.
  - Command results used for validation (for example, `cargo test`).
