# jq-kangaroo Development Guide

## Build/Test/Lint Commands
- **Build:** `yarn next:build` (NextJS) or `yarn foundry:compile` (Solidity)
- **Test:** `yarn test` or `yarn foundry:test` (all Foundry tests)
- **Single Test:** `cd packages/foundry && forge test --match-test testFunctionName` 
- **Lint:** `yarn lint` (runs both NextJS and Foundry linting)
- **Type Check:** `yarn next:check-types` (NextJS TypeScript)
- **Format:** `yarn format` (Prettier for NextJS) or `yarn foundry:format` (Forge fmt for Solidity)
- **Dev Server:** `yarn start` (starts NextJS dev server)

## Code Style Guidelines
- **TypeScript:** Strong typing preferred, use `type` over `interface` when possible
- **Imports:** Follow order defined in `.prettierrc.js`: React, Next, third-party, heroicons, local imports
- **Formatting:** 120 character line length, 2 space indentation, trailing commas
- **Components:** Use functional components with hooks
- **State Management:** React Query for API state, React Context for app state
- **Error Handling:** Try/catch blocks for async code, proper error propagation
- **Naming:** camelCase for variables/functions, PascalCase for components/types
- **Comments:** Minimal comments, focus on "why" not "what"
- **Security:** Never commit secrets or keys, follow Solidity best practices

Follow existing patterns in the codebase. This is a Scaffold-ETH 2 based project with NextJS and Foundry.