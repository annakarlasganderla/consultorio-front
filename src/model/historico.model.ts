import { AbstractEntity } from "./abstract-entity.model";
import { StatusAgenda } from "./status-agenda";

export class Historico extends AbstractEntity {
    data! : Date;
    status_agenda! : StatusAgenda;
    observacao! : string;
    secretaria! : [];
    paciente! : [];
    agenda! : []
}