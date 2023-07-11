import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const Layout = () => {
  // useNavigate로 페이지 이동하기
  const navigate = useNavigate();
  return (
    // 1. 반복되는 부분 가져오기 (header & footer)
    <div
      style={{
        minHeight: "100vh",
        position: "relative",
        paddingBottom: "90px",
        boxSizing: "border-box",
      }}
    >
      {/* Header */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "24px",
          backgroundColor: "#000000",
          color: "white",
        }}
      >
        {/* Link로 페이지 이동하기! */}
        <Link to="/">로고</Link>
        <div
          style={{
            display: "flex",
            gap: "12px",
          }}
        >
          <div
            // useNavigate로 페이지 이동!
            onClick={() => {
              alert("로그인 하시겠어용?");
              navigate("/login");
            }}
          >
            로그인
          </div>
          <div
            // useNavigate로 페이지 이동!
            onClick={() => {
              alert("회원가입 하시겠어용?");
              navigate("/signup");
            }}
          >
            회원가입
          </div>
        </div>
      </header>
      {/* 3. Outlet을 import 해서 넣고 싶은 곳에 넣어주기! */}
      <Outlet />
      {/* footer */}
      <footer
        style={{
          marginTop: "24px",
          display: "flex",
          justifyContent: "space-between",
          padding: "24px",
          backgroundColor: "#EEEEEE",
          color: "black",
          position: "absolute",
          bottom: 0,
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <div>문의하기</div>
        <div>SNS 채널들</div>
      </footer>
    </div>
  );
};
