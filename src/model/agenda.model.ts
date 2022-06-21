import { AbstractEntity } from "./abstract-entity.model";
import { StatusAgenda } from "./status-agenda";

export class Agenda extends AbstractEntity {
    status! : StatusAgenda;
    data_ate! : Date;
    data_de! : Date;
    encaixe! : boolean;
    paciente! : [];
    secretaria! : [];
    medico! : []; 
}