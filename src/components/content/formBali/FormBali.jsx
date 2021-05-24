import React, { useState } from "react";
import { Space, Form, Input, Tooltip, Typography, notification } from "antd";
import mainConfig from "../../../config/main";
import "./formarea.css";
import { Link, useParams } from "react-router-dom";
import MenuForm from "../../menu/MenuForm";
import axios from "axios";
import portrait from "../../../assets/potrait.svg";
const FormBali = () => {
  const [image, setImage] = useState(portrait);
  const { dpc } = useParams();
  const [data, setData] = useState({
    nama: "",
    photo: "",
    provinsi: "",
    kabupaten_kota: "",
    alamat: "",
    kelurahan: "",
    kecamatan: "",
    kode_pos: "",
    telp_rumah: "",
    telp_kantor: "",
    telp_hp: "",
    email: "",
    tempat_lahir: "",
    tanggal_lahir: "",
    agama: "",
    status: "menikah",
    jenis_kelamin: "pria",
    riwayat_partai: "",
    riwayat_pdip: "",
    pendidikan_terakhir: "",
    pendidikan_informal: "",
    riwayat_pekerjaan: "",
    informasi_lain: "",
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
    formdata.append("photo", data.photo);
    formdata.append("kabupaten_kota", data.kabupaten_kota);
    formdata.append("alamat", data.alamat);
    formdata.append("provinsi", data.provinsi);
    formdata.append("kelurahan", data.kelurahan);
    formdata.append("kecamatan", data.kecamatan);
    formdata.append("kode_pos", data.kode_pos);
    formdata.append("telp_rumah", data.telp_rumah);
    formdata.append("telp_kantor", data.telp_kantor);
    formdata.append("telp_hp", data.telp_hp);
    formdata.append("email", data.email);
    formdata.append("tempat_lahir", data.tempat_lahir);
    formdata.append("tanggal_lahir", data.tanggal_lahir);
    formdata.append("agama", data.agama);
    formdata.append("status", data.status);
    formdata.append("jenis_kelamin", data.jenis_kelamin);
    formdata.append("riwayat_partai", data.riwayat_partai);
    formdata.append("riwayat_pdip", data.riwayat_pdip);
    formdata.append("pendidikan_terakhir", data.pendidikan_terakhir);
    formdata.append("pendidikan_informal", data.pendidikan_informal);
    formdata.append("riwayat_pekerjaan", data.riwayat_pekerjaan);
    formdata.append("informasi_lain", data.informasi_lain);

    return await axios(`${mainConfig.host}/storeform/${dpc}`, {
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
            window.location.href = `/${dpc}`;
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
          Form Biodata
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

        <div className="form_group">
          <label htmlFor="photo">foto diri</label>
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

        <h1 className="section_title" id="alamat">
          Alamat
        </h1>

        <div className="form_group">
          <label htmlFor="alamat">Alamat Lengkap</label>
          <textarea
            rows={4}
            required
            placeholder="Alamat Lengkap"
            name="alamat"
            id="alamat"
            value={data.alamat}
            onChange={(e) => {
              onFinish(e);
            }}
          ></textarea>
        </div>

        <div className="form_group">
          <label htmlFor="provinsi">provinsi</label>
          <input
            required
            placeholder="provinsi"
            name="provinsi"
            id="provinsi"
            value={data.provinsi}
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
          <label htmlFor="kabupaten_kota">Kabupaten / Kota</label>
          <input
            required
            type="text"
            placeholder="kabupaten_kota"
            name="kabupaten_kota"
            id="kabupaten_kota"
            value={data.kabupaten_kota}
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
            placeholder="kode pos"
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
          <label htmlFor="telp_rumah">no telpon</label>
          <input
            type="text"
            placeholder="handphone"
            name="telp_hp"
            id="telp_hp"
            value={data.telp_hp}
            onChange={(e) => {
              onFinish(e);
            }}
          />
          <input
            type="text"
            placeholder="telepon rumah"
            name="telp_rumah"
            id="telp_rumah"
            value={data.telp_rumah}
            onChange={(e) => {
              onFinish(e);
            }}
          />

          <input
            type="text"
            placeholder="telepon kantor"
            name="telp_kantor"
            id="telp_kantor"
            value={data.telp_kantor}
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

        <div className="form_group wrap">
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
          <label htmlFor="tanggal_lahir" style={{ justifyContent: "center" }}>
            tanggal lahir
          </label>
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
        </div>

        <div className="form_group">
          <label htmlFor="agama">agama</label>
          <input
            required
            type="text"
            placeholder="agama"
            name="agama"
            id="agama"
            value={data.agama}
            onChange={(e) => {
              onFinish(e);
            }}
          />
        </div>

        <div className="form_group">
          <label htmlFor="status">status</label>
          <select
            style={{
              width: "100%",
              height: "35px",
              padding: "0 8px",
            }}
            value={data.status}
            required
            placeholder="status"
            name="status"
            id="status"
            value={data.status}
            onChange={(e) => {
              onFinish(e);
            }}
          >
            <option value="menikah">menikah</option>
            <option value="single">single</option>
          </select>
        </div>

        <div className="form_group">
          <label htmlFor="jenis_kelamin">jenis kelamin</label>
          <select
            style={{
              width: "100%",
              height: "35px",
              padding: "0 8px",
            }}
            required
            value={data.jenis_kelamin}
            placeholder="jenis_kelamin"
            name="jenis_kelamin"
            id="jenis_kelamin"
            value={data.jenis_kelamin}
            onChange={(e) => {
              onFinish(e);
            }}
          >
            <option value="pria">pria</option>
            <option value="wanita">wanita</option>
          </select>
        </div>

        <h1 className="section_title" id="data_profesi">
          Riwayat Organisasi Kepartaian
        </h1>

        <div className="form_group">
          <label htmlFor="riwayat_partai">sebelum masuk PDI Perjuangan</label>
          <textarea
            rows={4}
            placeholder={`1. ....
2. ....
3. ....
            `}
            name="riwayat_partai"
            id="riwayat_partai"
            value={data.riwayat_partai}
            onChange={(e) => {
              onFinish(e);
            }}
          ></textarea>
        </div>

        <div className="form_group">
          <label htmlFor="riwayat_pdip">PDI Perjuangan</label>
          <textarea
            rows={4}
            placeholder={`1. ....
2. ....
3. ....
            `}
            name="riwayat_pdip"
            id="riwayat_pdip"
            value={data.riwayat_pdip}
            onChange={(e) => {
              onFinish(e);
            }}
          ></textarea>
        </div>

        <div className="form_group">
          <label htmlFor="pendidikan_terakhir">pendidikan terakhir</label>
          <input
            required
            type="text"
            placeholder="pendidikan_terakhir"
            name="pendidikan_terakhir"
            id="pendidikan_terakhir"
            value={data.pendidikan_terakhir}
            onChange={(e) => {
              onFinish(e);
            }}
          />
        </div>

        <div className="form_group">
          <label htmlFor="pendidikan_informal">pendidikan informal</label>
          <textarea
            rows={4}
            required
            placeholder={`1. ...
2. ...
3. ...
          `}
            name="pendidikan_informal"
            id="pendidikan_informal"
            value={data.pendidikan_informal}
            onChange={(e) => {
              onFinish(e);
            }}
          ></textarea>
        </div>

        <div className="form_group">
          <label htmlFor="riwayat_pekerjaan">riwayat pekerjaan</label>
          <textarea
            rows={4}
            required
            placeholder={`1. ...
2. ...
3. ...
            `}
            name="riwayat_pekerjaan"
            id="riwayat_pekerjaan"
            value={data.riwayat_pekerjaan}
            onChange={(e) => {
              onFinish(e);
            }}
          ></textarea>
        </div>

        <div className="form_group">
          <label htmlFor="informasi_lain">informasi lainnya</label>
          <textarea
            rows={4}
            placeholder={``}
            name="informasi_lain"
            id="informasi_lain"
            value={data.informasi_lain}
            onChange={(e) => {
              onFinish(e);
            }}
          ></textarea>
        </div>

        <div className="form_group">
          <p>
            Demikian biodata ini saya buat dengan sebenarnya, untuk dapat
            dipergunakan sebagaimana mestinya.{" "}
          </p>
        </div>

        {/* <h1 className="section_title" id="data_rekrutment">
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
        </div> */}

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

export default FormBali;
