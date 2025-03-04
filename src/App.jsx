import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductList from "./ProductList";
import AddProduct from "./AddProduct";

function App() {
  const [count, setCount] = useState(0)
  
  const [refresh, setRefresh] = useState(false);
  const apiUrl = "http://localhost:5173";

  return (
    <div>
      <h1>ร้านค้าสินค้าออนไลน์</h1>
      <ProductList apiUrl="http://localhost:5173" />
      <AddProduct apiUrl="http://localhost:5173" />
    </div>
  );
}

export default App
