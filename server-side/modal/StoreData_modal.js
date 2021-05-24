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
}

module.exports = new StoreData();
