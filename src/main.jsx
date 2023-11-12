import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/Router.jsx";
import AuthProvider from "./providers/AuthProvider.jsx";
import { HelmetProvider } from "react-helmet-async";
import { AnimatePresence } from "framer-motion";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <AnimatePresence >
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </AnimatePresence>
    </HelmetProvider>
  </React.StrictMode>
);
