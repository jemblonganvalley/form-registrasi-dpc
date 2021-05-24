const db = require("./connection");

class StoreData {
  async storeDataMember(data) {
    return await db("datakader")
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
