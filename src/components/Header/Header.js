import React from "react";
import styled from "styled-components";
import CustomButton from "../CustomButton/CustomButton";
const Header = ({ logo, isSticky, isHide }) => {
  const HeaderEl = styled.header`
    padding-left: 1rem;
    padding-right: 1rem;
    background-color: #fff;
    margin: 50px 0 0 0;
    &.sticky {
      position: sticky;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 9999;
    }
    &.hideNavbar {
      display: none;
      visibility: hidden;
    }
  `;
  const Logo = styled.img`
    width: 100px;
    height: 50px;
  `;
  return (
    <HeaderEl
      className={`navbar ${isSticky ? "sticky" : ""} ${
        isHide ? "hideNavbar" : ""
      }`}
    >
      <Logo src={logo} alt="logo" className="logo" />
      <CustomButton
        type="customBtn"
        icon="fa fa-user"
        text="ثبت نام/ورود"
        csBgColor="transparent"
        csColor="#333"
        csBorderColor="#333"
        csOnFocusBoxShadow="unset"
      />
    </HeaderEl>
  );
};

export default Header;
