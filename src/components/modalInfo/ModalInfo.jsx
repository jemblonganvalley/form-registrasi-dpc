import React, { useEffect, useState } from 'react'
import { Descriptions, Button, message } from "antd"

const ModalInfo = ({ data, action, dpc }) => {

    const [photo, setPhoto] = useState("")

    const handlePhoto = (fl) => {
        const reader = new FileReader()
        reader.onload = () => {
            setPhoto(reader.result)
        }
        reader.readAsDataURL(fl)
    }

    useEffect(() => {
        handlePhoto(data.photo)
        message.warning("Mohon Periksa Kembali Data Anda Sebelum Submit")
        return () => { }
    }, [])



    return (
        <div style={{
            position: "fixed",
            backgroundColor: "white",
            width: "100vw",
            height: "100vh",
            top: "0",
            left: "0",
            paddingTop: "200px",
            paddingLeft: "80px",
            paddingRight: "80px"

        }}>
            <Descriptions title={<h1>{`Form Pendaftaran Kader DPC PDI Perjuangan ${dpc.toUpperCase().replace("-", " ")}`}</h1>} bordered>

                <Descriptions.Item label="nama">
                    {data.nama}
                </Descriptions.Item>

                <Descriptions.Item label="photo">
                    <img src={photo} alt="" width={80} />
                </Descriptions.Item>

                <Descriptions.Item label="kabupaten_kota">
                    {data.kabupaten_kota}
                </Descriptions.Item>

                <Descriptions.Item label="alamat">
                    {data.alamat}
                </Descriptions.Item>

                <Descriptions.Item label="provinsi">
                    {data.provinsi}
                </Descriptions.Item>

                <Descriptions.Item label="kelurahan">
                    {data.kelurahan}
                </Descriptions.Item>

                <Descriptions.Item label="kecamatan">
                    {data.kecamatan}
                </Descriptions.Item>

                <Descriptions.Item label="kode_pos">
                    {data.kode_pos}
                </Descriptions.Item>

                <Descriptions.Item label="telp_rumah">
                    {data.telp_rumah}
                </Descriptions.Item>

                <Descriptions.Item label="telp_kantor">
                    {data.telp_kantor}
                </Descriptions.Item>

                <Descriptions.Item label="telp_hp">
                    {data.telp_hp}
                </Descriptions.Item>

                <Descriptions.Item label="email">
                    {data.email}
                </Descriptions.Item>

                <Descriptions.Item label="tempat_lahir">
                    {data.tempat_lahir}
                </Descriptions.Item>

                <Descriptions.Item label="tanggal_lahir">
                    {data.tanggal_lahir}
                </Descriptions.Item>

                <Descriptions.Item label="agama">
                    {data.agama}
                </Descriptions.Item>

                <Descriptions.Item label="status">
                    {data.status}
                </Descriptions.Item>

                <Descriptions.Item label="jenis_kelamin">
                    {data.jenis_kelamin}
                </Descriptions.Item>

                <Descriptions.Item label="pendidikan_terakhir">
                    {data.pendidikan_terakhir}
                </Descriptions.Item>

                <Descriptions.Item label="riwayat_pekerjaan">
                    {data.riwayat_pekerjaan}
                </Descriptions.Item>

            </Descriptions>

            <div className="form_group">
                <button className="submit_button" type="button" onClick={() => {
                    action.handleSubmit()
                }}>
                    submit
                </button>
                <button
                    className="submit_button cancel"
                    onClick={() => {
                        action.setModal(false)
                    }}
                >
                    kembali
                </button>
            </div>
        </div>
    )
}

export default ModalInfo
