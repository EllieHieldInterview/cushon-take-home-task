## React + TypeScript + Vite

This app is built is using the [vite](https://vite.dev/guide/) react-ts template.

# Running the App

From the root of this repo run

```
npm run dev
```

the app should be available at http://localhost:5173/

# Running the Tests

This application has e2e tests using [Playwright](https://playwright.dev/)

The application will be launched by the webserver command in the playwright.config.ts file

## Headless Mode

To run the tests in headless mode run

```
npm run e2e
```

## Ui Mode

To launch the playwright UI run

```
npm run e2e:ui
```
