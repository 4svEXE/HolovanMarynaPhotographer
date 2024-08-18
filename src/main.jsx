import React from "react";
import ReactDOM from "react-dom/client";
import App from "app";
import { ConnectProwiders } from "providers";
import "localization/index"

import "./index.scss";
import "./tailwind.custom.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ConnectProwiders>
      <App />
    </ConnectProwiders>
  </React.StrictMode>
);
