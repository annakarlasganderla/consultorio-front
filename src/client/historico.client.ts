import { Historico } from "./../model/historico.model";
import { PageResponse } from "./../model/page/page-response";

import axios, { AxiosInstance } from "axios";
import { PageRequest } from "@/model/page/page-request";

export class HistoricoClient {
  private axiosClient: AxiosInstance;

  constructor() {
    this.axiosClient = axios.create({
      baseURL: "http://localhost:8080/api/historicos",
      headers: { "Content-type": "application/json" },
    });
  }

  public async getHistoricosById(id: number): Promise<Historico> {
    try {
      return (await this.axiosClient.get<Historico>(`/${id}`)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async getHistoricos(
    pageRequest: PageRequest
  ): Promise<PageResponse<Historico>> {
    try {
      let requestPath = "";

      requestPath += `?page=${pageRequest.currentPage}`;
      requestPath += `&size=${pageRequest.pageSize}`;
      requestPath += `&sort=${
        pageRequest.sortField === undefined ? "" : pageRequest.sortField
      },${pageRequest.direction}`;

      return (
        await this.axiosClient.get<PageResponse<Historico>>(requestPath, {
          params: { filtros: pageRequest.filter },
        })
      ).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async postHistorico(historico: Historico): Promise<void> {
    try {
      return await this.axiosClient.post("/", historico);
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async putHistorico(historico: Historico): Promise<void> {
    try {
      return (await this.axiosClient.put(`/${historico.id}`, historico)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async desativarHistorico(historico: Historico): Promise<void> {
    try {
      return (
        await this.axiosClient.put(`/desativar/${historico.id}`, historico)
      ).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }
}
