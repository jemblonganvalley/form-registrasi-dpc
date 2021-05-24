import React from "react";
import { Space } from "antd";
import Button from "../../button/Button";
import { Link, useParams } from "react-router-dom";
import "./home.css";
const Home = () => {
  const { dpc } = useParams();
  return (
    <main className="home">
      <h3>FORM PENDAFTARAN ANGGOTA BARU</h3>
      <h1> DPC PDI PERJUANGAN</h1>
      <h1 style={{ margin: "0" }}>
        <b style={{ textTransform: "uppercase" }}>
          {" "}
          {dpc || "jakarta selatan"}
        </b>{" "}
      </h1>
      <h3>
        <br /> MASA BAKTI 2020 - 2025
      </h3>
      <Link to={`/form-pendaftaran/${dpc}`}>
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
