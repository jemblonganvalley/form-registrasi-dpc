-- CREATE TABLE
-- CREATE TABLE dpc_denpasar(
--     id integer PRIMARY KEY,
--     nama varchar NOT NULL ,
--     provinsi varchar NOT NULL,
--     kabupaten_kota varchar NOT NULL,
--     alamat varchar NOT NULL,
--     kelurahan varchar NOT NULL,
--     kecamatan varchar NOT NULL,
--     kode_pos varchar NOT NULL,
--     telp_rumah varchar NOT NULL,
--     telp_kantor varchar NOT NULL,
--     telp_hp varchar NOT NULL,
--     tempat_lahir varchar NOT NULL,
--     tanggal_lahir varchar NOT NULL,
--     agama varchar NOT NULL,
--     status varchar NOT NULL,
--     jenis_kelamin varchar NOT NULL,
--     riwayat_partai varchar NOT NULL,
--     riwayat_pdip varchar NOT NULL,
--     pendidikan_terakhir varchar NOT NULL,
--     pendidikan_informal varchar NOT NULL,
--     riwayat_pekerjaan varchar NOT NULL,
--     informasi_lain varchar NOT NULL
-- );

-- delete from photo where user_email="admin@admin.com"

-- delete from datakader

alter table dpc_denpasar add column approval integer
