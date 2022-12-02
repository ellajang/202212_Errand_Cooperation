import React from "react";
import "./Header.module.css";
import { Link } from "react-router-dom";
import { BiChevronLeft } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <div className="header">
      <BiChevronLeft
        className="backpage"
        onClick={() => {
          navigate(-1);
        }}
      />
      <Link to="/home">
        <img className="header_logo" src="/assets/logo.png" />
      </Link>
    </div>
  );
}

export default Header;
