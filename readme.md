# ink-cli-test

React-based CLI application built with [Ink](https://github.com/vadimdemedes/ink) featuring an interactive text input interface.

## Install

```bash
npm install
```

## Development

### Build
```bash
npm run build
```

### Watch mode
```bash
npm run dev
```

### Lint & Format
```bash
npm run lint        # Check with Biome
npm run lint:fix    # Auto-fix with Biome
npm run format      # Format with Biome
```

### Test
```bash
npm test
```

## Usage

```bash
npm run build
node dist/cli.js
```

## Tech Stack

- **React** 19.1.1
- **Ink** 6.3.1 - React for interactive CLIs
- **ink-text-input** 6.0.0 - Text input component
- **TypeScript** 5.0.3
- **Vite** 7.1.7 - Build tool
- **Biome** 2.2.4 - Linter & Formatter
