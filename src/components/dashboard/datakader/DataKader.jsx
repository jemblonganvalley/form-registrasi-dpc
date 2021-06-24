import React, { useEffect, useState } from "react";
import "./datakader.css";
import { Result, Table } from "antd";
import { deleteRegistrasi, fetchDataKader } from "./dataKader_api";
import { useParams } from "react-router-dom";

const DataKader = () => {
  const [dataKader, setDataKader] = useState([]);
  const { dpc } = useParams("dpc");
  useEffect(() => {
    fetchDataKader(dpc)
      .then((result) => {
        console.log(result);
        setDataKader(result);
      })
      .catch((err) => {
        console.error(err);
      });

    return () => {};
  }, []);

  const reject = (filter) => {
    deleteRegistrasi(filter)
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
              // console.log(e);
              reject({
                id: e.id,
                token: "fadliselaz",
                dpc: dpc,
              });
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
