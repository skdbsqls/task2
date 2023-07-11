import React from "react";
import { Link, useSearchParams } from "react-router-dom";

export default function Products({ products }) {
  // URL에 따라 상품을 정렬 혹은 필터링하기 위해 query parameter 사용!
  // 상품을 정렬 혹은 필터링하는 거니까 상품리스트에서!!
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <>
      <div
        style={{
          marginTop: "56px",
          textAlign: "center",
        }}
      >
        <h2>🔥 여름 추천템 🔥</h2>
        <button
          onClick={() => {
            // url에 query parameter 붙이는 방법!
            setSearchParams({
              sort: "price",
            });
          }}
        >
          가격순
        </button>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "24px",
          }}
        >
          {products.map((product) => (
            // product에 id도 설정해주고 Link에 받아온 id 넣어주기
            <Link to={`/products/${product.id}`}>
              <div
                style={{
                  width: "200px",
                  height: "240px",
                  backgroundColor: "#068FFF",
                }}
              >
                <div>{product.name}</div>
                <div>{product.price}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
