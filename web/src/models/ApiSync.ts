import axios, { AxiosPromise } from "axios";

interface HasId {
  //id: number;
  id?: number;
}

export class ApiSync<T extends HasId> {
  constructor(public rootUrl: string) {}
  // Get user
  fetch(id: number): AxiosPromise {
    return axios.get(`${this.rootUrl}/${id}`);
  }
  //
  save(data: T): AxiosPromise {
    // T use HasId and fix id
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
