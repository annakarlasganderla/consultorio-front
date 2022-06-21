import { Pessoa } from "./pessoa.model";

export class Medico extends Pessoa {
    crm!: string;
    consultorio! : string;
    porcetangem_participacao!: number;
    valor_consulta! : number;
    especialidade! : [];
}