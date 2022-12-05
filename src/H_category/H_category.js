import React, { useEffect, useState } from "react";
import Categorylist from "../components/Categorylist/Categorylist";
import Header from "../components/Header/Header";
import "./H_category.css";

function H_category() {
  const [Category, setCategory] = useState([]);
  useEffect(() => {
    let model = {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("email"),
      },
    };
    fetch(`/api/cate`, model)
      .then((res) => res.json())
      .then((res) => setCategory(res));
  }, []);

  return (
    <>
      <Header />
      <p className="Ct_title">카테고리</p>
      <div className="Ct">
        <div className="Ct1">
          <Categorylist Key="1" location="뚜레주르" />
        </div>
        <div className="Ct1">
          <Categorylist Key="2" location="봉마르쉐" />
        </div>
        <div className="Ct1">
          <Categorylist Key="3" location="프린트실" />
        </div>
        <div className="Ct1">
          <Categorylist Key="4" location="cu편의점" />
        </div>
        <div className="Ct1">
          <Categorylist Key="5" location="호아토스트" />
        </div>
      </div>
      <div className="footer_">&copy;{new Date().getFullYear()} Errand App</div>
    </>
  );
}

export default H_category;
