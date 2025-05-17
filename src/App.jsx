import { Outlet } from "react-router-dom";
import "./App.css";
import { Header, Footer } from "./components";
import React, { useEffect, useState } from "react";

function App() {
  return (
    <div className="min-h-screen w-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
