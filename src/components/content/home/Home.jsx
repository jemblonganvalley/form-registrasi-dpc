import React, { useState } from "react";
import { Select, Button } from "antd";
// import Button from "../../button/Button";
import { Link, useParams } from "react-router-dom";
import "./home.css";
import dpcList from "../../../api/bali.json"

const { Option } = Select

const Home = () => {
  const { dpc, kota } = useParams();
  const [selectDpc, setSelectDpc] = useState("kota-denpasar")

  const handleChange = (value) => {
    console.log(value)
    setSelectDpc(value)
  }


  return (
    <main className="home">
      <h3>FORM PENDAFTARAN ANGGOTA BARU</h3>
      <h1> DPC PDI PERJUANGAN {kota.toUpperCase()}</h1>
      {/* <h2 style={{ margin: "0" }}>
        <b style={{ textTransform: "uppercase" }}>
          {" "}
          {dpc.replace("-", " ") || "jakarta selatan"}
        </b>{" "}
      </h2> */}
      <h3>
        <br /> MASA BAKTI 2020 - 2025
      </h3>

      <div className="selectArea" style={{
        display: "flex",
        alignItems: "center",
        gap: "20px",
        marginTop: "40px"
      }}>

        <Select defaultValue={dpc} style={{
          width: "250px",

        }} size="large" onChange={handleChange}>
          {dpcList.map((e) => {
            return (
              <Option value={e.dpc.replace(" ", "-")} key={e.id} >{e.dpc.toUpperCase()}</Option>
            )
          })}
        </Select>
        <Link to={`/form-pendaftaran/${selectDpc}`}>
          <Button
            style={{
              width: "200px"
            }}
            size="large"
          >DAFTAR</Button>
        </Link>
      </div>

    </main>
  );
};

export default Home;
