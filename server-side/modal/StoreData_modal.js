const db = require("./connection");

class StoreData {
  async storeDataMember(data, dpc) {
    console.log(dpc)
    return await db(`dpc_${dpc.replace("-", "_")}`)
      .insert(data)
      .then((result) => {
        console.log(result)
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
    return await db("dpc_" + dpc.replace("-","_").toLowerCase())
      .join("photo", `dpc_${dpc.replace("-","_").toLowerCase()}.email`, "=", "photo.user_email")
      .select(
        `dpc_${dpc.replace("-","_").toLowerCase()}.nama`,
        `dpc_${dpc.replace("-","_").toLowerCase()}.alamat`,
        `dpc_${dpc.replace("-","_").toLowerCase()}.email`,
        `dpc_${dpc.replace("-","_").toLowerCase()}.provinsi`,
        `dpc_${dpc.replace("-","_").toLowerCase()}.telp_hp`,
        "photo.photo_path"
      )
      .then((result) => {
        console.log(result)
        return result;
      })
      .catch((err) => {
        console.log(err)

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
