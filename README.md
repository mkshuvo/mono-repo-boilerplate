# Monorepo Template Nestjs and Nextjs
<center>
<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://seeklogo.com/images/N/nestjs-logo-09342F76C0-seeklogo.com.png" width="200"></a>
<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://miro.medium.com/v2/resize:fit:1400/1*BQZAbczBfLYtPp-6HmN0ZQ.jpeg" width="300"></a>

</center>

## Overview
This monorepo contains both Next.js (JavaScript/TypeScript) and NestJS (Node.js framework) applications. A monorepo, or monolithic repository, stores multiple projects in a single repository.

# Benefits
- Code Sharing

- Dependency Management

- Unified Development Environment

- Centralized Version Control



## Steps to run:

Make sure to change project name `tsconfig.base.json` on  if you are creating your own project  

```
# Install packages
npm install

# Start server
nx serve server

# Start client
nx start client
```
## How to add new plugins/app
```
# Add plugin
npx nx add @nx/react

# Use code generator
npx nx generate @nx/react:app demo

# Run development server
npx nx serve demo

# View project details
npx nx show project demo --web
```
Cors is already enabled in nestjs. Ready development. Run `npx nx list` to get a list of available plugins and whether they have generators. Then run `npx nx list <plugin-name>` to see what generators are available. Feel free to adjust and customize this description as needed! If you have any other requests or questions, just let me know.
