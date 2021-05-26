import React from "react";
import "./menuform.css";
import { NavHashLink } from "react-router-hash-link";

const MenuForm = () => {
  const scrollWidthOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -180;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };
  return (
    <div className="menu_form">
      <div className="menu_item">
        <NavHashLink
          to="#data_personal"
          activeStyle={{
            color: "red",
          }}
          scroll={(el) => {
            scrollWidthOffset(el);
          }}
        >
          Data Personal
        </NavHashLink>
      </div>

      <div className="menu_item">
        <NavHashLink
          to="#alamat"
          activeStyle={{
            color: "red",
          }}
          scroll={(el) => {
            scrollWidthOffset(el);
          }}
        >
          Alamat
        </NavHashLink>
      </div>

      <div className="menu_item">
        <NavHashLink
          to="#data_profesi"
          activeStyle={{
            color: "red",
          }}
          scroll={(el) => {
            scrollWidthOffset(el);
          }}
        >
          Riwayat Organisasi
        </NavHashLink>
      </div>
      {/* 
      <div className="menu_item">
        <NavHashLink
          to="#data_rekrutment"
          activeStyle={{
            color: "red",
          }}
          scroll={(el) => {
            scrollWidthOffset(el);
          }}
        >
          Data Rekrutment
        </NavHashLink>
      </div> */}
    </div>
  );
};

export default MenuForm;
