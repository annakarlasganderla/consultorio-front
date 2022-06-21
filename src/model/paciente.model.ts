import { Pessoa } from "./pessoa.model";
import { TipoAtendimento } from "./tipo-atendimento";

export class Paciente extends Pessoa {
    tipoAtendimento! : TipoAtendimento;
    numero_cartao_convenio! : string;
    data_vencimento! : Date;
    convenio! : [];
}