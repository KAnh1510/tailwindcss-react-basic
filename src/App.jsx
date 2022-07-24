import { useState } from "react";
import "./App.css";
import AuthButton from "./components/AuthButton";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Trending from "./components/Trending";

function App() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5">
      <Nav />
      <main className="md:col-span-4 bg-cyan-50 px-12 py-6">
        <AuthButton />
        <Header />
        <Trending />
      </main>
    </div>
  );
}

export default App;
