import axios from "axios";
import config from "../../../config/main";

export async function fetchDataKader(dpc) {
  return await axios(`${config.host}/getalldata`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    data: {
      filter: {
        dpc: dpc,
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

export async function deleteRegistrasi(filter) {
  return await axios(`${config.host}/deleteRegistration`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    data: {
      filter: filter,
    },
  })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
}
