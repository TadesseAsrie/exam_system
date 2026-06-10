import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("examUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    // Mock authentication - accept any credentials with validation
    const users = JSON.parse(localStorage.getItem("examUsers") || "[]");
    const foundUser = users.find(
      (u) => u.email === email && u.password === password,
    );

    if (foundUser) {
      const { password: _, ...userWithoutPassword } = foundUser;
      setUser(userWithoutPassword);
      localStorage.setItem("examUser", JSON.stringify(userWithoutPassword));
      return { success: true };
    }

    // Demo login for first time users
    if (email === "demo@example.com" && password === "password") {
      const demoUser = {
        id: "demo1",
        name: "John Doe",
        email: "demo@example.com",
        department: "Computer Science",
        avatar:
          "https://ui-avatars.com/api/?name=John+Doe&background=3b82f6&color=fff",
      };
      setUser(demoUser);
      localStorage.setItem("examUser", JSON.stringify(demoUser));
      return { success: true };
    }

    return { success: false, error: "Invalid email or password" };
  };

  const register = (userData) => {
    const users = JSON.parse(localStorage.getItem("examUsers") || "[]");
    const existingUser = users.find((u) => u.email === userData.email);

    if (existingUser) {
      return { success: false, error: "Email already registered" };
    }

    const newUser = {
      id: Date.now().toString(),
      ...userData,
      avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(userData.name)}&background=3b82f6&color=fff`,
    };

    users.push(newUser);
    localStorage.setItem("examUsers", JSON.stringify(users));

    const { password, ...userWithoutPassword } = newUser;
    setUser(userWithoutPassword);
    localStorage.setItem("examUser", JSON.stringify(userWithoutPassword));

    return { success: true };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("examUser");
  };

  const updateProfile = (updates) => {
    const updatedUser = { ...user, ...updates };
    setUser(updatedUser);
    localStorage.setItem("examUser", JSON.stringify(updatedUser));

    // Update in users array
    const users = JSON.parse(localStorage.getItem("examUsers") || "[]");
    const userIndex = users.findIndex((u) => u.id === user.id);
    if (userIndex !== -1) {
      users[userIndex] = { ...users[userIndex], ...updates };
      localStorage.setItem("examUsers", JSON.stringify(users));
    }
  };

  const value = {
    user,
    loading,
    login,
    register,
    logout,
    updateProfile,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
