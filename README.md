<img src="/public/Sayabucks.png">

## Overview

![GitHub package.json version](https://img.shields.io/github/package-json/v/bastiannispel/vite-react-ts)
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/bastiannispel/vite-react-ts/ci?label=ci)
![GitHub last commit](https://img.shields.io/github/last-commit/bastiannispel/vite-react-ts)
![GitHub issues](https://img.shields.io/github/issues/bastiannispel/vite-react-ts)
![GitHub repo size](https://img.shields.io/github/repo-size/bastiannispel/vite-react-ts)

This is a clone landing page of Starbucks for [React](https://reactjs.org/) apps using [Vite](https://vitejs.dev/) as a build tool and the [airbnb configuration for eslint](https://www.npmjs.com/package/eslint-config-airbnb) as well as [prettier](https://prettier.io/) for code formatting and [husky](https://github.com/typicode/husky) to setup git hooks.

## Keywords
![](https://img.shields.io/badge/<TypeScript>-555555?style=for-the-badge&logo=typescript)
![](https://img.shields.io/badge/<React>-555555?style=for-the-badge&logo=react)
![](https://img.shields.io/badge/<Vite>-555555?style=for-the-badge&logo=vite)
![](https://img.shields.io/badge/<Cypress>-555555?style=for-the-badge&logo=cypress)
![](https://img.shields.io/badge/<Prettier>-555555?style=for-the-badge&logo=prettier)
![](https://img.shields.io/badge/<Eslint>-555555?style=for-the-badge&logo=eslint)


## Using React Context in the Hamburger Menu

I knew that I had to store the hamburger's open and closed state, so I created a component that uses React Context, in [this file](./src/Context/OpenContext.tsx):

```typescript
export const OpenContext = createContext<InitialState | null>(null);
```

Then, I created a provider to share the open/close state with children components in [the main app component](./src/App/App.tsx):

```typescript
export default function App() {
  return (
    <div className={styles.app}>
      <OpenProvider>
        <Header />
        <Page />
      </OpenProvider>
      <Footer />
    </div>
  );
}
```

## Cypress Tests

This was my first time using Cypress but I found it very intuitive and convenient for testing the UI.

[![asciicast](https://asciinema.org/a/489175.svg)](https://asciinema.org/a/489175)

It was also very convenient to iterate on the test cases using the Cypress UI.

![](./docs/cypress.gif)
