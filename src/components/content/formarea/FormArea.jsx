import React, { useState } from "react";
import { Space, Form, Input, Tooltip, Typography, notification } from "antd";
import "./formarea.css";
import { Link } from "react-router-dom";
import MenuForm from "../../menu/MenuForm";
import axios from "axios";
import portrait from "../../../assets/potrait.svg";
const FormArea = () => {
  const [image, setImage] = useState(portrait);
  const [data, setData] = useState({
    nama: "",
    tanggal_lahir: "",
    tempat_lahir: "",
    nik: "",
    nama_jalan: "",
    rt: null,
    rw: null,
    no_rumah: null,
    kecamatan: "",
    kelurahan: "",
    kota: "",
    kode_pos: "",
    no_telpon_1: "",
    no_telpon_2: "",
    email: "",
    instagram: "",
    facebook: "",
    keahlian: "",
    pekerjaan: "",
    pendidikan: "",
    photo: "",
    perekrut: "",
    no_kta: "",
    tingkat_pengurus: "",
    wil_rekrut_rw: 2,
    wil_rekrut_kelurahan: "",
  });
  const onFinish = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const openNotification = () => {
    notification.open({
      message: "Menambahkan Daftar Baru",
      description: "Data baru berhasil di tambahkan.",
      onClick: () => {
        console.log("Notification Clicked!");
      },
      placement: "bottomRight",
    });
  };

  const imageHandler = async (e) => {
    let reader = await new FileReader();
    let url = await reader.readAsDataURL(e.target.files[0]);

    reader.onloadend = () => {
      setImage(reader.result);
    };
  };

  const handleSubmit = async (e) => {
    console.log(data.photo);
    e.preventDefault();
    let formdata = await new FormData();

    formdata.append("nama", data.nama);
    formdata.append("tanggal_lahir", data.tanggal_lahir);
    formdata.append("tempat_lahir", data.tempat_lahir);
    formdata.append("nik", data.nik);
    formdata.append("nama_jalan", data.nama_jalan);
    formdata.append("rt", data.rt);
    formdata.append("rw", data.rw);
    formdata.append("no_rumah", data.no_rumah);
    formdata.append("kecamatan", data.kecamatan);
    formdata.append("kelurahan", data.kelurahan);
    formdata.append("kota", data.kota);
    formdata.append("kode_pos", data.kode_pos);
    formdata.append("no_telpon_1", data.no_telpon_1);
    formdata.append("no_telpon_2", data.no_telpon_2);
    formdata.append("email", data.email);
    formdata.append("instagram", data.instagram);
    formdata.append("facebook", data.facebook);
    formdata.append("keahlian", data.keahlian);
    formdata.append("pekerjaan", data.pekerjaan);
    formdata.append("pendidikan", data.pendidikan);
    formdata.append("photo", data.photo);
    formdata.append("perekrut", data.perekrut);
    formdata.append("no_kta", data.no_kta);
    formdata.append("tingkat_pengurus", data.tingkat_pengurus);
    formdata.append("wil_rekrut_rw", data.wil_rekrut_rw);
    formdata.append("wil_rekrut_kelurahan", data.wil_rekrut_kelurahan);

    return await axios("http://192.168.8.25:8080/api/storeform", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      data: formdata,
    })
      .then((result) => {
        if (result.status === 201) {
          openNotification();
          setTimeout(() => {
            window.location.href = "/";
          }, 1000);
        }
      })
      .catch((err) => {
        console.error(err);
        return err;
      });
  };

  return (
    <main className="form_area">
      <MenuForm />

      <form
        className="form_register"
        action="api/storeform"
        encType="multipart/form-data"
        method="POST"
        onSubmit={handleSubmit}
      >
        <h1 className="section_title" id="data_personal">
          Data Personal
        </h1>
        <div className="form_group">
          <label htmlFor="nama">nama lengkap</label>
          <input
            required
            type="text"
            placeholder="nama lengkap"
            name="nama"
            id="nama"
            value={data.nama}
            onChange={(e) => {
              onFinish(e);
            }}
          />
        </div>

        <div className="form_group wrap">
          <label htmlFor="tanggal_lahir">tanggal lahir</label>
          <input
            required
            type="date"
            placeholder="tanggal lahir"
            name="tanggal_lahir"
            id="tanggal_lahir"
            onChange={(e) => {
              onFinish(e);
            }}

            // value={data.tanggal_lahir}
          />
          <label htmlFor="tempat_lahir">tempat lahir</label>
          <input
            required
            type="text"
            placeholder="tempat lahir"
            name="tempat_lahir"
            id="tempat_lahir"
            value={data.tempat_lahir}
            onChange={(e) => {
              onFinish(e);
            }}
          />
        </div>

        <div className="form_group">
          <label htmlFor="nik">no NIK</label>
          <input
            required
            type="text"
            placeholder="Nomer NIK"
            name="nik"
            id="nik"
            value={data.nik}
            onChange={(e) => {
              onFinish(e);
            }}
          />
        </div>

        <h1 className="section_title" id="alamat">
          Alamat
        </h1>

        <div className="form_group">
          <label htmlFor="nama_jalan">Jalan / Gang / Perumahan</label>
          <input
            required
            type="text"
            placeholder="Nama Jalan"
            name="nama_jalan"
            id="nama_jalan"
            value={data.nama_jalan}
            onChange={(e) => {
              onFinish(e);
            }}
          />
        </div>

        <div
          className="form_group wrap"
          style={{ textAlign: "right", justifyContent: "flex-end" }}
        >
          <label htmlFor="rt">rt</label>
          <input
            required
            type="number"
            placeholder="no RT"
            name="rt"
            id="rt"
            value={data.rt}
            onChange={(e) => {
              onFinish(e);
            }}
          />

          <label htmlFor="rw" style={{ justifyContent: "center" }}>
            rw
          </label>
          <input
            required
            type="number"
            placeholder="no rw"
            name="rw"
            id="rw"
            value={data.rw}
            onChange={(e) => {
              onFinish(e);
            }}
          />

          <label htmlFor="no_rumah" style={{ justifyContent: "center" }}>
            no / blok
          </label>
          <input
            required
            type="number"
            placeholder="no / blok rumah"
            name="no_rumah"
            id="no_rumah"
            value={data.no_rumah}
            onChange={(e) => {
              onFinish(e);
            }}
          />
        </div>

        <div className="form_group">
          <label htmlFor="kelurahan">kelurahan</label>
          <input
            required
            type="text"
            placeholder="Kelurahan"
            name="kelurahan"
            id="kelurahan"
            value={data.kelurahan}
            onChange={(e) => {
              onFinish(e);
            }}
          />
        </div>

        <div className="form_group">
          <label htmlFor="kecamatan">kecamatan</label>
          <input
            required
            type="text"
            placeholder="Kecamatan"
            name="kecamatan"
            id="kecamatan"
            value={data.kecamatan}
            onChange={(e) => {
              onFinish(e);
            }}
          />
        </div>

        <div
          className="form_group wrap"
          style={{ textAlign: "right", justifyContent: "flex-end" }}
        >
          <label htmlFor="kota">kota</label>
          <input
            required
            type="text"
            placeholder="Kota"
            name="kota"
            id="kota"
            value={data.kota}
            onChange={(e) => {
              onFinish(e);
            }}
          />

          <label htmlFor="kode_pos" style={{ justifyContent: "center" }}>
            kode pos
          </label>
          <input
            required
            type="number"
            placeholder="kode post"
            name="kode_pos"
            id="kode_pos"
            value={data.kode_pos}
            onChange={(e) => {
              onFinish(e);
            }}
          />
        </div>

        <div
          className="form_group wrap"
          style={{ textAlign: "right", justifyContent: "flex-end" }}
        >
          <label htmlFor="no_telpon_1">no telpon</label>
          <input
            required
            type="text"
            placeholder="no handphone 1"
            name="no_telpon_1"
            id="no_telpon_1"
            value={data.no_telpon_1}
            onChange={(e) => {
              onFinish(e);
            }}
          />
          <input
            type="text"
            placeholder="no handphone 2 / optional"
            name="no_telpon_2"
            id="no_telpon_2"
            value={data.no_telpon_2}
            onChange={(e) => {
              onFinish(e);
            }}
          />
        </div>

        <div className="form_group">
          <label htmlFor="email">email</label>
          <input
            required
            type="email"
            placeholder="email"
            name="email"
            id="email"
            value={data.email}
            onChange={(e) => {
              onFinish(e);
            }}
          />
        </div>

        <div
          className="form_group wrap"
          style={{ textAlign: "right", justifyContent: "flex-end" }}
        >
          <label htmlFor="instagram">Social Media</label>
          <input
            required
            type="text"
            placeholder="@instagram"
            name="instagram"
            id="instagram"
            value={data.instagram}
            onChange={(e) => {
              onFinish(e);
            }}
          />
          <input
            required
            type="text"
            placeholder="@facebook"
            name="facebook"
            id="facebook"
            value={data.facebook}
            onChange={(e) => {
              onFinish(e);
            }}
          />
        </div>

        <h1 className="section_title" id="data_profesi">
          Data Profesi Kemampuan Diri & Pendidikan
        </h1>

        <div className="form_group">
          <label htmlFor="keahlian">keahlian khusus</label>
          <textarea
            type="keahlian"
            placeholder="keahlian khusus"
            name="keahlian"
            id="keahlian"
            value={data.keahlian}
            onChange={(e) => {
              onFinish(e);
            }}
          ></textarea>
        </div>

        <div className="form_group">
          <label htmlFor="pekerjaan">pekerjaan</label>
          <input
            required
            type="pekerjaan"
            placeholder="pekerjaan"
            name="pekerjaan"
            id="pekerjaan"
            value={data.pekerjaan}
            onChange={(e) => {
              onFinish(e);
            }}
          />
        </div>

        <div className="form_group">
          <label htmlFor="pendidikan">pendidikan</label>
          <input
            required
            type="pendidikan"
            placeholder="pendidikan"
            name="pendidikan"
            id="pendidikan"
            value={data.pendidikan}
            onChange={(e) => {
              onFinish(e);
            }}
          />
        </div>

        <div className="form_group">
          <label htmlFor="photo">photo</label>
          <div className="image_input">
            <input
              accept="image/x-png,image/jpeg,image/png,image/jpg"
              multiple={false}
              required
              type="file"
              placeholder="photo"
              name="photo"
              id="photo"
              onChange={(e) => {
                setData({
                  ...data,
                  photo: e.target.files[0],
                });
                imageHandler(e);
              }}

              // value={data.photo}
            />
            <img
              className="image_preview"
              src={image}
              alt=""
              style={{
                flex: "1",
                maxHeight: "300px",
                objectFit: "contain",
              }}
            />
          </div>
        </div>

        <h1 className="section_title" id="data_rekrutment">
          Data Rekrutment
        </h1>
        <i>Diisi Oleh Petugas Partai</i>

        <div className="form_group">
          <label htmlFor="perekrut">di rekrut oleh</label>
          <input
            required
            type="text"
            placeholder="Nama Lengkap Perekrut"
            name="perekrut"
            id="perekrut"
            value={data.perekrut}
            onChange={(e) => {
              onFinish(e);
            }}
          />
        </div>

        <div className="form_group">
          <label htmlFor="no_kta">no KTA</label>
          <input
            required
            type="text"
            placeholder="Nomer Kartu Anggota"
            name="no_kta"
            id="no_kta"
            value={data.no_kta}
            onChange={(e) => {
              onFinish(e);
            }}
          />
        </div>

        <div className="form_group">
          <label htmlFor="tingkat_pengurus">tingkat pengurus</label>
          <input
            required
            type="text"
            placeholder="Tingkat Pengurus"
            name="tingkat_pengurus"
            id="tingkat_pengurus"
            value={data.tingkat_pengurus}
            onChange={(e) => {
              onFinish(e);
            }}
          />
        </div>

        <div
          className="form_group wrap"
          style={{ textAlign: "right", justifyContent: "flex-end" }}
        >
          <label htmlFor="wil_rekrut_rw" style={{ flex: "1" }}>
            Wilayah Perekrut
          </label>
          <input
            style={{ flex: ".5" }}
            required
            type="number"
            placeholder="RW"
            name="wil_rekrut_rw"
            id="wil_rekrut_rw"
            value={data.wil_rekrut_rw}
            onChange={(e) => {
              onFinish(e);
            }}
          />
          <input
            style={{ flex: "1" }}
            type="text"
            placeholder="Kelurahan"
            name="wil_rekrut_kelurahan"
            id="wil_rekrut_kelurahan"
            value={data.wil_rekrut_kelurahan}
            onChange={(e) => {
              onFinish(e);
            }}
          />
        </div>

        <div className="form_group">
          <button className="submit_button" type="submit">
            submit
          </button>
          <button
            className="submit_button cancel"
            onClick={() => {
              window.location.href = "/";
            }}
          >
            cancel
          </button>
        </div>
      </form>
    </main>
  );
};

export default FormArea;
