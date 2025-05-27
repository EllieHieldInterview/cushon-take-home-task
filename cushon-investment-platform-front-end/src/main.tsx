import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/** I could implement dark and light themes here */}
    <MantineProvider>
      {/** I could add routing using react router if I wanted to add more pages to the app */}
      <App />
    </MantineProvider>
  </StrictMode>
);
