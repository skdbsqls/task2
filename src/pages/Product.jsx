import React, { useState } from "react";
import { useParams } from "react-router-dom";

export default function Product({ products }) {
  // url의 id가 달라지면 다른 상품을 보이게 하자!
  // useParams을 이용해서 id를 가져오고 가져온 id로 상품의 id도 변경해주기!
  // const id가 아니라 const { id }로 하는 이유는
  // 여러개의 url parameter가 있을 경우 필요한 것만 구조분해할당으로 가져오기 위함!
  const { id } = useParams();

  // 클릭한 상품 찾기!
  // find를 이용해서 product의 id와 params의 id를 비교해서 같은 놈을 찾는다
  const product = products.find((product) => product.id === Number(id));

  // 내가 선택한 구매옵션 화면에 띄우기!
  // 옵션과 관련된 state 선언
  const [option, setOption] = useState("");
  const handleOption = (event) => {
    setOption(event.target.value);
  };
  return (
    <>
      <div>
        <h1>상세 페이지</h1>
        <div
          style={{
            display: "flex",
            gap: "44px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "200px",
              height: "240px",
              backgroundColor: "#068FFF",
            }}
          >
            {product.name}
          </div>
          <div>
            <h3>가격: {product.price}</h3>
            <h3>좋아요: {product.likes}</h3>
            <h3>구매옵션</h3>
            <select
              style={{
                width: "100px",
              }}
              // value와 onChange 셋팅!
              value={option}
              onChange={handleOption}
            >
              <option>선택하세요.</option>
              {product.options.map((option) => (
                <option value={option}>{option}</option>
              ))}
            </select>
            {/* "선택하세요."는 띄우지 않깅! */}
            <div>구매옵션 : {option !== "선택하세요." ? option : ""}</div>
          </div>
        </div>
      </div>
    </>
  );
}
