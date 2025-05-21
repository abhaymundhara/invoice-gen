// App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import { useAuth } from "./components/AuthContext";

import Navbar from "./components/NavbarGuest";
import Sidebar from "./components/Sidebar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Invoice from "./components/dashboard/Invoices";

function App() {
  const { isLoggedIn } = useAuth();

  return (
    <>
      {/* Show Navbar only on public pages */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <Navbar />
              <Login />
            </>
          }
        />
        <Route
          path="/signup"
          element={
            <>
              <Navbar />
              <Signup />
            </>
          }
        />

        {/* Dashboard routes include Sidebar */}
        <Route
          path="/dashboard"
          element={
            isLoggedIn ? (
              <div className="dashboard-layout">
                <Sidebar />
                <div className="dashboard-main">
                  <Dashboard />
                </div>
              </div>
            ) : (
              <Login />
            )
          }
        />

        <Route
          path="/invoice"
          element={
            isLoggedIn ? (
              <div className="dashboard-layout">
                <Sidebar />
                <div className="dashboard-main">
                  <Invoice />
                </div>
              </div>
            ) : (
              <Login />
            )
          }
        />
      </Routes>
    </>
  );
}

export default App;
