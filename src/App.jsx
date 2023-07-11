import React from "react";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Main from "./pages/Main";
import Products from "./pages/Products";
import Product from "./pages/Product";
import { Layout } from "./components/Layout";
import { NotFound } from "./components/NotFound";
// Login & Signup 페이지 만들고 import해서 Route 설정해주기
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const App = () => {
  // 상품 정보 useState 만들기!
  // 초기 값으로 주어진 상품 정보 넣기
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "멋진 바지",
      price: 20000,
      options: ["28", "30", "32"],
      likes: 100,
    },
    {
      id: 2,
      name: "멋진 셔츠",
      price: 10000,
      options: ["small", "medium", "large"],
      likes: 200,
    },
    {
      id: 3,
      name: "멋진 신발",
      price: 30000,
      options: ["230", "240", "250", "260", "270"],
      likes: 300,
    },
  ]);
  return (
    // Routes로 Route를 감싸주고 주소 설정하고 각 주소에 맞는 컴포넌트 넣어주기!
    <Routes>
      {/* 2. 다른 Route들을 감싸주기 */}
      <Route element={<Layout />}>
        {/* props로 products 전달해주기 */}
        <Route path="/" element={<Main products={products} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/products" element={<Products products={products} />} />
        {/* URL Parameter 사용하기! : + 아무 이름! */}
        <Route path="/products/:id" element={<Product products={products} />} />
      </Route>
      {/* 없는 URL로 접근할 때 404페이지 만들기! path="*" */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
