import React from "react";
import { createRoot } from "react-dom/client";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider.js";
import App from "./App.js";

if (process.env.NODE_ENV === "production") {
  disableReactDevTools(); // disable React DevTools to prevent unauthorized access to sensitive data or potential security vulnerabilities
}

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <GoogleOAuthProvider
          clientId={process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID}
        >
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </GoogleOAuthProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
