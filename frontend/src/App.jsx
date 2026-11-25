import { useState } from "react";
import Login      from "./components/Login.jsx";
import Dashboard  from "./components/Dashboard.jsx";
import Explorer   from "./components/Explorer.jsx";
import Keranjang  from "./components/Keranjang.jsx";
import Akun       from "./components/Akun.jsx";
import AdminPanel from "./components/AdminPanel.jsx";

export default function App() {
  const [page, setPage] = useState("login"); // "login" | "dashboard" | "explorer" | "cart" | "account" | "admin"
  const [currentUser, setCurrentUser] = useState({
    name: "Budi Santoso",
    email: "budi.santoso@email.com",
    role: "customer",
  });

  const handleLogin = (user) => {
    if (user) {
      setCurrentUser(user);
      if (user.role === "admin") {
        setPage("admin");
        return;
      }
    }
    setPage("dashboard");
  };

  const handleLogout = () => {
    localStorage.removeItem("tokoku_token");
    setPage("login");
  };

  if (page === "login") {
    return <Login onLogin={handleLogin} />;
  }

  if (page === "admin") {
    return (
      <AdminPanel
        currentUser={currentUser}
        onBackToStore={() => setPage("dashboard")}
        onLogout={handleLogout}
      />
    );
  }

  if (page === "explorer") {
    return (
      <Explorer
        currentUser={currentUser}
        onBackToDashboard={() => setPage("dashboard")}
        onOpenCart={() => setPage("cart")}
        onOpenAccount={() => setPage("account")}
        onOpenAdmin={() => setPage("admin")}
        onLogout={handleLogout}
      />
    );
  }

  if (page === "cart") {
    return (
      <Keranjang
        currentUser={currentUser}
        onBackToDashboard={() => setPage("dashboard")}
        onOpenExplorer={() => setPage("explorer")}
        onOpenAccount={() => setPage("account")}
        onOpenAdmin={() => setPage("admin")}
        onLogout={handleLogout}
      />
    );
  }

  if (page === "account") {
    return (
      <Akun
        currentUser={currentUser}
        onBackToDashboard={() => setPage("dashboard")}
        onOpenExplorer={() => setPage("explorer")}
        onOpenCart={() => setPage("cart")}
        onOpenAdmin={() => setPage("admin")}
        onLogout={handleLogout}
      />
    );
  }

  return (
    <Dashboard
      currentUser={currentUser}
      onLogout={handleLogout}
      onOpenExplorer={() => setPage("explorer")}
      onOpenCart={() => setPage("cart")}
      onOpenAccount={() => setPage("account")}
      onOpenAdmin={() => setPage("admin")}
    />
  );
}
