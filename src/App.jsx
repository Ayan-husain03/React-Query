import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./base/Header";
import Footer from "./base/Footer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Outlet />
      <Footer />
    </QueryClientProvider>
  );
}

export default App;
