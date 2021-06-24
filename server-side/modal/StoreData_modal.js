const db = require("./connection");

class StoreData {
  async storeDataMember(data, dpc) {
    console.log(dpc);
    return await db(`dpc_${dpc.replace("-", "_")}`)
      .insert(data)
      .then((result) => {
        console.log(result);
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
    // let filDpc = await dpc.dpc;
    let rep = await dpc.replace("-", "_");
    return await db("dpc_" + rep.toLowerCase())
      .join("photo", `dpc_${rep.toLowerCase()}.email`, "=", "photo.user_email")
      .select(
        `dpc_${rep.toLowerCase()}.id`,
        `dpc_${rep.toLowerCase()}.nama`,
        `dpc_${rep.toLowerCase()}.alamat`,
        `dpc_${rep.toLowerCase()}.email`,
        `dpc_${rep.toLowerCase()}.provinsi`,
        `dpc_${rep.toLowerCase()}.telp_hp`,
        "photo.photo_path"
      )
      .then((result) => {
        // console.log(result);
        return result;
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  }

  async deleteData(filter) {
    const { dpc, id } = filter;
    let rep = await dpc.replace("-", "_").toLowerCase();
    // console.log(rep, id);
    return await db(`dpc_${rep}`)
      .where({
        id: id,
      })
      .del()
      .then((result) => {
        console.log(result);
        return result;
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  }
}

module.exports = new StoreData();
