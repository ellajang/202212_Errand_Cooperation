import React, { useEffect, useState } from "react";
import "../H_product/H_product.css";
import {useNavigate} from "react-router-dom";

const H_product = () => {
  const navigate = useNavigate();
  const [post, setPost] = useState([]);

  useEffect(() => {
    let model = {
      method: 'GET',
      headers: {
        Authorization: localStorage.getItem("email")
      }
    };
    fetch(`/api/posts`, model)
      .then((res) => res.json())
      .then((res) => setPost(res));
  }, []);

  return (
      // {
      //   post.map(
      //     p => {
      //       return (
      //         <div className="product" key={p.postId} onClick={() => {
      //           navigate("/E_start/" + p.postId);
      //         }}>
      //           <div className="product_info">
      //             <p className='product_title'>{p.product}</p>
      //             <div className="product_price">
      //               <div className="price_box">상품비용</div>
      //               <div className="price"> &nbsp;{p.cost}원</div>
      //             </div>
      //             <div className="product_price">
      //               <div className="price_box">심부름 비용</div>
      //               <div className="price">&nbsp;{p.fee}원</div>
      //             </div>
      //             <div className="product_price">
      //               <div className="price_box">배달장소</div>
      //               <p className="location">{p.destination}</p>
      //             </div>
      //           </div>
      //         </div>
      //       )
      //     }
      //   )
      // }
    <div className="product" key="1" onClick={() => {
      navigate("/E_start/1");
    }}>
      <div className="product_info">
        <p className='product_title'>커피</p>
        <div className="product_price">
          <div className="price_box">상품비용</div>
          <div className="price"> 500원</div>
        </div>
        <div className="product_price">
          <div className="price_box">심부름 비용</div>
          <div className="price">500원</div>
        </div>
        <div className="product_price">
          <div className="price_box">배달장소</div>
          <p className="location">창조관</p>
        </div>
      </div>
    </div>
  );
};

export default H_product;
