import axios from "axios";
import config from "../../../config/main";

export async function fetchDataKader() {
  return await axios(`${config.host}/getalldata`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    data: {
      filter: {
        dpc: "denpasar",
      },
    },
  })
    .then((result) => {
      return result.data.data;
    })
    .catch((err) => {
      return err;
    });
}
