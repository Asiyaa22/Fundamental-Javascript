import React, { useState, useMemo } from "react";
import ProductList from "./Components/ProductList";

const App = () => {
  const [theme, setTheme] = useState("light");

  const products = useMemo(() => 
     [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Phone" },
    { id: 3, name: "Headphones" },
  ]
  , []); 

  return (
    <div>
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        style={{
          background: theme === "light" ? "#222" : "#eee",
          color: theme === "light" ? "#fff" : "#000",
          padding: "10px 20px",
          borderRadius: "8px",
        }}
      >
        Toggle Theme
      </button>
      <ProductList products={products} />
    </div>
  );
};

export default App;
