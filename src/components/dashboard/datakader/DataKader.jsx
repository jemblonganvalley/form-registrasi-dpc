import React, { useEffect, useState } from "react";
import "./datakader.css";
import { Result, Table } from "antd";
import { deleteRegistrasi, fetchDataKader } from "./dataKader_api";

const DataKader = () => {
  const [dataKader, setDataKader] = useState([]);
  useEffect(() => {
    fetchDataKader()
      .then((result) => {
        console.warn(result);
        setDataKader(result);
      })
      .catch((err) => {
        console.error(err);
      });

    return () => {};
  }, []);

  const reject = (email) => {
    deleteRegistrasi(email)
      .then((result) => {
        console.log(result);
        window.location.reload();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const column = [
    {
      title: "nama",
      dataIndex: "nama",
      key: "nama",
    },
    {
      title: "alamat",
      dataIndex: "alamat",
      key: "alamat",
    },
    {
      title: "email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "handphone",
      dataIndex: "telp_hp",
      key: "telp_hp",
    },
    {
      title: "alamat",
      dataIndex: "alamat",
      key: "alamat",
    },
    {
      title: "provinsi",
      dataIndex: "provinsi",
      key: "provinsi",
    },
    {
      title: "approval",
      dataIndex: "approval",
      key: "approval",
      render: (e) => (
        <div>
          {e ? (
            <span style={{ color: "green" }}>approved</span>
          ) : (
            <span style={{ color: "orange" }}>waiting</span>
          )}
        </div>
      ),
    },
    // {
    //   title: "photo",
    //   dataIndex: "photo_path",
    //   key: "photo_path",
    //   render: (e) => (
    //     <img src={"http://localhost:8080/" + e.replace("/", "")} alt={e} />
    //   ),
    // },
    {
      title: "action",
      render: (e) => (
        <>
          <button>approve</button>
          <button
            onClick={() => {
              reject(e.email);
            }}
          >
            reject
          </button>
        </>
      ),
    },
  ];

  return (
    <main className="page_dataKader">
      <Table dataSource={dataKader} columns={column} />
    </main>
  );
};

export default DataKader;
