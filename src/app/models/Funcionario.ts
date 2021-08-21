import { Foto } from "./Foto";

export class Funcionario {

    constructor() {
        this.id = 0;
        this.nome = '';
        this.rg = '';
        this.idDepartamento = 0;
    }

    id: number;
    nome: string;
    rg: string;
    idDepartamento: number;
    foto: Foto;

}
