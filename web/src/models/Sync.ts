import axios, { AxiosPromise } from "axios";
import { UserProps } from "./User";

export class Sync {
  constructor(public rootUrl: string) {}
  // Get user
  fetch(id: number): AxiosPromise {
    return axios.get(`${this.rootUrl}/${id}`);
  }
  //
  save(data: UserProps): AxiosPromise {
    const { id } = data;
    if (id) {
      // put
      return axios.put(`${this.rootUrl}/${id}`, data); // put this.data
    } else {
      // post
      return axios.post(this.rootUrl, data);
    }
  }
}