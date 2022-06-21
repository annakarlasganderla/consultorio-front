import { Agenda } from "./../model/agenda.model";
import { PageResponse } from "./../model/page/page-response";

import axios, { AxiosInstance } from "axios";
import { PageRequest } from "@/model/page/page-request";

export class EspecialidadeClient {
  private axiosClient: AxiosInstance;

  constructor() {
    this.axiosClient = axios.create({
      baseURL: "http://localhost:8080/api/agendas",
      headers: { "Content-type": "application/json" },
    });
  }

  public async getAgendasById(id: number): Promise<Agenda> {
    try {
      return (await this.axiosClient.get<Agenda>(`/${id}`)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async getAgendas(
    pageRequest: PageRequest
  ): Promise<PageResponse<Agenda>> {
    try {
      let requestPath = "";

      requestPath += `?page=${pageRequest.currentPage}`;
      requestPath += `&size=${pageRequest.pageSize}`;
      requestPath += `&sort=${
        pageRequest.sortField === undefined ? "" : pageRequest.sortField
      },${pageRequest.direction}`;

      return (
        await this.axiosClient.get<PageResponse<Agenda>>(requestPath, {
          params: { filtros: pageRequest.filter },
        })
      ).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async postAgenda(agenda: Agenda): Promise<void> {
    try {
      return await this.axiosClient.post("/", agenda);
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async putAgenda(agenda: Agenda): Promise<void> {
    try {
      return (await this.axiosClient.put(`/${agenda.id}`, agenda)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async desativarAgendas(agenda: Agenda): Promise<void> {
    try {
      return (await this.axiosClient.put(`/desativar/${agenda.id}`, agenda))
        .data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }
}