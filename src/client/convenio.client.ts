import { PageResponse } from "./../model/page/page-response";
import { PageRequest } from "@/model/page/page-request";
import { Convenio } from "@/model/convenio.model";
import axios, { AxiosInstance } from "axios";

export class ConvenioClient {
  private axiosClient: AxiosInstance;

  constructor() {
    this.axiosClient = axios.create({
      baseURL: "http://localhost:8080/api/convenios",
      headers: { "Content-type": "application/json" },
    });
  }

  public async getConveniosById(id: number): Promise<Convenio> {
    try {
      return (await this.axiosClient.get<Convenio>(`/${id}`)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async getConvenios(
    pageRequest: PageRequest
  ): Promise<PageResponse<Convenio>> {
    try {
      let requestPath = "";

      requestPath += `?page=${pageRequest.currentPage}`;
      requestPath += `&size=${pageRequest.pageSize}`;
      requestPath += `&sort=${
        pageRequest.sortField === undefined ? "" : pageRequest.sortField
      },${pageRequest.direction}`;

      return (
        await this.axiosClient.get<PageResponse<Convenio>>(requestPath, {
          params: { filtros: pageRequest.filter },
        })
      ).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async postConvenio(convenio: Convenio): Promise<void> {
    try {
      return await this.axiosClient.post("/", convenio);
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async putConvenio(convenio: Convenio): Promise<void> {
    try {
      return (await this.axiosClient.put(`/${convenio.id}`, convenio)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async desativarConvenio(convenio: Convenio): Promise<void> {
    try {
      return (await this.axiosClient.put(`/desativar/${convenio.id}`, convenio))
        .data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }
}
