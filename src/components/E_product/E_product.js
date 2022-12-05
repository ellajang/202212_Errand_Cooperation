import React, { useEffect, useState } from "react";
import "./E_product.css";
import { useParams } from "react-router-dom";

function E_product() {
  const [post, setPost] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    let model = {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("email"),
      },
    };
    fetch(`/api/posts/` + id, model)
      .then((res) => res.json())
      .then((res) => setPost(res));
  }, []);
  return (
    <div className="Errandmake">
      <input type="text" name="id" value={post.postId} hidden />
      <div class="container">
        <span class="main">상품명 :</span>
        <span class="main">&nbsp;{post.product}</span>
      </div>
      <div className="container">
        <span className="main">상품 판매처 :</span>
        <span className="main">&nbsp;{post.category}</span>
      </div>
      <div class="container">
        <span class="main">상품 비용 :</span>
        <span class="main">&nbsp;{post.cost}&nbsp;원</span>
      </div>
      <div class="container">
        <span class="main">심부름 비용 :</span>
        <span class="main">&nbsp;{post.fee}&nbsp;원</span>
      </div>
      <div class="container">
        <span class="main">심부름 내용 :</span>
        <span class="main">&nbsp;{post.contents}</span>
      </div>
      <div class="container">
        <span class="main">거래 장소 :</span>
        <span class="main">&nbsp;{post.destination}</span>
      </div>
      <div class="container">
        <span class="main">고객명 : </span>
        <span class="main">&nbsp;{post.client_nick}</span>
      </div>
      <div class="container">
        <span class="main">고객 전화번호 ( 안심번호 ) :</span>
        <span class="main">&nbsp;{post.client_phone}</span>
      </div>
    </div>
  );
}

export default E_product;
