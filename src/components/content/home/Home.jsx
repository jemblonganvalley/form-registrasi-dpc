import React from "react";
import { Space } from "antd";
import Button from "../../button/Button";
import { Link } from "react-router-dom";
import "./home.css";
const Home = () => {
  return (
    <main className="home">
      <h3>FORM PENDAFTARAN ANGGOTA BARU</h3>
      <h1>PDI PERJUANGAN</h1>
      <h3>
        KOTA ADMINISTRASI JAKARTA SELATAN <br /> MASA BAKTI 2020 - 2025
      </h3>
      <Link to="/formpendaftaran">
        <Button
          value="daftar"
          width="200px"
          height="50px"
          bgColor="white"
          color="#c60605"
        />
      </Link>
    </main>
  );
};

export default Home;
