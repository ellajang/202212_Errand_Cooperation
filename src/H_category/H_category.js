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
      <div className="Ct_title">카테고리</div>
      <ul className="dep1">
        <li>
          <a className="depTitle" href="#">
            연세플라자
          </a>
          <ul className="dep2">
            <li>&nbsp;</li>
            <li>
              <a href="#">
                <Categorylist Key="1" location="뚜레주르" />
              </a>
            </li>
            <li>
              <a href="#">
                <Categorylist Key="2" location="프린트실" />
              </a>
            </li>
            <li>
              <a href="#">
                <Categorylist Key="3" location="봉마르쉐" />
              </a>
            </li>
            <li>
              <a href="#">
                <Categorylist Key="4" location="호아토스트" />
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a className="depTitle" href="#">
            학관
          </a>
          <ul className="dep2">
            <li>&nbsp;</li>
            <li>
              <a href="#">
                <Categorylist Key="5" location="cu편의점" />
              </a>
            </li>
            <li>
              <a href="#">
                <Categorylist Key="6" location="AA동아리" />
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a className="depTitle" href="#">
            창조관
          </a>
          <ul className="dep2">
            <li>&nbsp;</li>
            <li>
              <a href="#">
                <Categorylist Key="7" location="304호" />
              </a>
            </li>
            <li>
              <a href="#">
                <Categorylist Key="8" location="402호" />
              </a>
            </li>
            <li>
              <a href="#">
                <Categorylist Key="9" location="202호" />
              </a>
            </li>
            <li>
              <a href="#">
                <Categorylist Key="10" location="게시판 앞" />
              </a>
            </li>
          </ul>
        </li>
      </ul>
      <div className="footer">&copy;{new Date().getFullYear()} Errand App</div>
    </>
  );
}

export default H_category;
