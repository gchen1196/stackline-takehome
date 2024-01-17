import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { FluentProvider, teamsLightTheme } from "@fluentui/react-components";
import { Provider } from "react-redux";
import { store } from "./app/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <FluentProvider theme={teamsLightTheme}>
      <Provider store={store}>
        <App />
      </Provider>
    </FluentProvider>
  </React.StrictMode>,
);
