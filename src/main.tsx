import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import toast, { Toaster } from "react-hot-toast";
import AuthProvider from "react-auth-kit";
import createStore from "react-auth-kit/createStore";
import router from "./router";
import { theme } from "./theme";
import "./utils/style.css"

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (_, query) => {
      console.log("query", query.meta);
      if (query.meta?.errorMessage) {
        toast.error(
          (query.meta.errorMessage as unknown as string) ??
          "Something went wrong!"
        );
      }
    },
  }),
});

const store = createStore({
  authName: "_auth",
  authType: "cookie",
  cookieDomain: window.location.hostname,
  cookieSecure: window.location.protocol === "https:",
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider store={store}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <RouterProvider router={router} />
          <Toaster />
        </ThemeProvider>
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);
