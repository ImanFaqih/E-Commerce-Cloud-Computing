import { useState } from "react";
import Login     from "./components/Login.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Explorer  from "./components/Explorer.jsx";
import Keranjang from "./components/Keranjang.jsx";
import Akun      from "./components/Akun.jsx";

export default function App() {
  const [page, setPage] = useState("login"); // "login" | "dashboard" | "explorer" | "cart" | "account"

  if (page === "login") {
    return <Login onLogin={() => setPage("dashboard")} />;
  }

  if (page === "explorer") {
    return (
      <Explorer
        onBackToDashboard={() => setPage("dashboard")}
        onOpenCart={() => setPage("cart")}
        onOpenAccount={() => setPage("account")}
        onLogout={() => setPage("login")}
      />
    );
  }

  if (page === "cart") {
    return (
      <Keranjang
        onBackToDashboard={() => setPage("dashboard")}
        onOpenExplorer={() => setPage("explorer")}
        onOpenAccount={() => setPage("account")}
        onLogout={() => setPage("login")}
      />
    );
  }

  if (page === "account") {
    return (
      <Akun
        onBackToDashboard={() => setPage("dashboard")}
        onOpenExplorer={() => setPage("explorer")}
        onOpenCart={() => setPage("cart")}
        onLogout={() => setPage("login")}
      />
    );
  }

  return (
    <Dashboard
      onLogout={() => setPage("login")}
      onOpenExplorer={() => setPage("explorer")}
      onOpenCart={() => setPage("cart")}
      onOpenAccount={() => setPage("account")}
    />
  );
}
