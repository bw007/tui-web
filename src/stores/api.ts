import axios, { type AxiosRequestConfig } from "axios";
import { defineStore } from "pinia";

export const apiStore = defineStore("apiStore", () => {

  const get = async (payload: AxiosRequestConfig) => {
    return await axios.get(`https://journal.tiu.uz/api/v1/${payload.url}`, {
      headers: { 
        'Accept-Language': 'oz',
        ...payload.headers
      },
      params: { ...payload.params }
    }).catch((err) => {
      console.log("Err", err);
    })
  }

  return {
    get
  }
})