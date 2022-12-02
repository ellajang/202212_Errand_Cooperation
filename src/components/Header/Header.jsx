import React from "react";
import { Link } from "react-router-dom";
import { BiChevronLeft } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

function Header1() {
  const navigate = useNavigate();
  return (
    <div className="header_mypage">
      <BiChevronLeft
        className="backpage_mypage"
        onClick={() => {
          navigate(-1);
        }}
      />
      <Link to="/home">
        <img className="header_logo_mypage" src="/assets/logo.png" />
      </Link>
    </div>
  );
}

export default Header1;
