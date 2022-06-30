import { Pessoa } from "./pessoa.model";
import { TipoAtendimento } from "./tipo-atendimento";

export class Paciente extends Pessoa {
    tipoAtendimento! : TipoAtendimento;
    numeroCartaoConvenio! : string;
    dataVencimento! : Date;
    convenio! : [];
}