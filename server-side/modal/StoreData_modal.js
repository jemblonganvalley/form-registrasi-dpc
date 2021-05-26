const db = require("./connection");

class StoreData {
  async storeDataMember(data, dpc) {
    return await db(`dpc_${dpc}`)
      .insert(data)
      .then((result) => {
        return result;
      })
      .catch((err) => {
        return err;
      });
  }

  async storeImage(data) {
    return await db("photo")
      .insert(data)
      .then((result) => {
        return result;
      })
      .catch((err) => {
        return err;
      });
  }

  async getData(filter) {
    const { dpc } = filter;
    console.log(dpc);
    return await db("dpc_" + dpc)
      .join("photo", `dpc_${dpc}.email`, "=", "photo.user_email")
      .select(
        `dpc_${dpc}.nama`,
        `dpc_${dpc}.alamat`,
        `dpc_${dpc}.email`,
        `dpc_${dpc}.alamat`,
        `dpc_${dpc}.provinsi`,
        `dpc_${dpc}.approval`,
        `dpc_${dpc}.telp_hp`,
        "photo.photo_path"
      )
      .then((result) => {
        return result;
      })
      .catch((err) => {
        return err;
      });
  }

  async deleteData(filter) {
    return await db("dpc_denpasar")
      .where(filter)
      .del()
      .then((result) => {
        return result;
      })
      .catch((err) => {
        return err;
      });
  }
}

module.exports = new StoreData();
