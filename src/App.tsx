import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Router from "./Router/Router";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./Utils/ReactQueryConfig";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  );
}

export default App;
