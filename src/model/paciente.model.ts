import { Convenio } from './convenio.model';
import { Pessoa } from "./pessoa.model";
import { TipoAtendimento } from "./tipo-atendimento";

export class Paciente extends Pessoa {
    tipoAtendimento! : TipoAtendimento;
    numeroCartaoConvenio! : string;
    dataVencimento! : Date | string;
    convenio! : Convenio;
}