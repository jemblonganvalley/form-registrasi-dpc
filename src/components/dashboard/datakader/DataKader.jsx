import React, { useEffect, useState } from "react";
import "./datakader.css";
import { Result, Table } from "antd";
import { fetchDataKader } from "./dataKader_api";

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
      title: "photo",
      dataIndex: "photo_path",
      key: "photo_path",
      render: (e) => <img src={e} alt={e} />,
    },
  ];

  return (
    <main className="page_dataKader">
      <Table dataSource={dataKader} columns={column} />
    </main>
  );
};

export default DataKader;
