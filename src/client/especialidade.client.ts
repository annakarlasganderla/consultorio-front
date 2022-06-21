import { Especialidade } from "./../model/especialidade.model";
import { PageResponse } from "./../model/page/page-response";

import axios, { AxiosInstance } from "axios";
import { PageRequest } from "@/model/page/page-request";

export class EspecialidadeClient {
  private axiosClient: AxiosInstance;

  constructor() {
    this.axiosClient = axios.create({
      baseURL: "http://localhost:8080/api/especialidades",
      headers: { "Content-type": "application/json" },
    });
  }

  public async getEspecialidadesById(id: number): Promise<Especialidade> {
    try {
      return (await this.axiosClient.get<Especialidade>(`/${id}`)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async getEspecialidades(
    pageRequest: PageRequest
  ): Promise<PageResponse<Especialidade>> {
    try {
      let requestPath = "";

      requestPath += `?page=${pageRequest.currentPage}`;
      requestPath += `&size=${pageRequest.pageSize}`;
      requestPath += `&sort=${
        pageRequest.sortField === undefined ? "" : pageRequest.sortField
      },${pageRequest.direction}`;

      return (
        await this.axiosClient.get<PageResponse<Especialidade>>(requestPath, {
          params: { filtros: pageRequest.filter },
        })
      ).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async postEspecialidade(especialidade: Especialidade): Promise<void> {
    try {
      return await this.axiosClient.post("/", especialidade);
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async putEspecialidade(especialidade: Especialidade): Promise<void> {
    try {
      return (await this.axiosClient.put(`/${especialidade.id}`, especialidade))
        .data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async desativarEspecialidade(
    especialidade: Especialidade
  ): Promise<void> {
    try {
      return (
        await this.axiosClient.put(
          `/desativar/${especialidade.id}`,
          especialidade
        )
      ).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }
}
