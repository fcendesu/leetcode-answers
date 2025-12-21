# LeetCode Solutions

This repository contains my solutions to various LeetCode problems implemented in TypeScript and Rust.

## Structure

The repository is organized by language:

```
leetcode-answers/
├── typescript/          # TypeScript solutions (using Bun)
│   └── src/
│       ├── 1.TwoSum.ts
│       └── 219.ContainsDuplicateII.ts
└── rust/                # Rust solutions
    └── src/
        ├── lib.rs       # Library code
        └── bin/         # Executable binaries
            └── main.rs
```

Each problem solution follows the naming pattern:
- `<problem-number>.<problem-name>.ts` (TypeScript)
- `<problem-name>.rs` (Rust binaries)

## Running Solutions

### TypeScript Solutions

#### Prerequisites
- [Bun](https://bun.sh/) - JavaScript runtime and package manager

#### Setup
```bash
cd typescript
bun install
```

#### Running a solution
```bash
cd typescript
bun run src/<problem-number>.<problem-name>.ts
```

Example:
```bash
bun run src/1.TwoSum.ts
bun run src/219.ContainsDuplicateII.ts
```

### Rust Solutions

#### Prerequisites
- [Rust](https://www.rust-lang.org/) and Cargo

#### Setup
```bash
cd rust
# No installation needed, Cargo handles dependencies
```

#### Running a solution

**Option 1: Using binaries in `src/bin/`**
```bash
cd rust
cargo run --bin <binary-name>
```

Example:
```bash
cargo run --bin two_sum
cargo run --bin contains_duplicate_ii
```

**Option 2: Running tests**
```bash
cd rust
cargo test
```

**Option 3: Default binary (`src/main.rs`)**
```bash
cd rust
cargo run
```

## Tech Stack

- **TypeScript**: Bun runtime for fast TypeScript execution
- **Rust**: Cargo for package management and building

## LeetCode Profile

https://leetcode.com/u/fcen/
