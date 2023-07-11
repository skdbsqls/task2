import React from "react";
import { Link, useNavigate } from "react-router-dom";

// products 받아오기!
export default function Main({ products }) {
  // useNavigate를 import해서 사용하기
  const navigate = useNavigate();
  return (
    <>
      {/* main */}
      <main>
        {/* 케러셀 */}
        <section
          style={{
            backgroundColor: "#4E4FEB",
            color: "white",
            height: "300px",
            lineHeight: "300px",
            textAlign: "center",
            fontSize: "24px",
          }}
        >
          케러셀
        </section>
        {/* 여름 추천템 */}
        <section
          style={{
            marginTop: "56px",
            textAlign: "center",
          }}
        >
          <h2
            onClick={() => {
              // useNavigate는 추가적인 코드를 짤 수 있음!
              alert("진짜로 이동할거야??");
              navigate("/products");
            }}
          >
            🔥 여름 추천템 🔥
          </h2>
          {/* Link 사용해서 페이지 이동하기
          Link는 <a> 태그와 같음! */}
          <Link to={"/products"}>더보기</Link>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "24px",
            }}
          >
            {/* 받아온 products로 map을 사용하여 뿌려주기! */}
            {products.map((product) => (
              <div
                style={{
                  width: "200px",
                  height: "240px",
                  backgroundColor: "#068FFF",
                  color: "#fff",
                }}
              >
                <div>{product.name}</div>
                <div>{product.price}</div>
              </div>
            ))}
          </div>
        </section>
        {/* 추가적인 데이터 */}
        <section
          style={{
            marginTop: "56px",
            textAlign: "center",
          }}
        >
          <h2>🔥 세일 상품 🔥</h2>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "24px",
            }}
          >
            <div
              style={{
                width: "200px",
                height: "240px",
                backgroundColor: "#EEEEEE",
              }}
            >
              상품1
            </div>
            <div
              style={{
                width: "200px",
                height: "240px",
                backgroundColor: "#EEEEEE",
              }}
            >
              상품2
            </div>
            <div
              style={{
                width: "200px",
                height: "240px",
                backgroundColor: "#EEEEEE",
              }}
            >
              상품3
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
