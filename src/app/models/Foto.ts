import { SafeUrl } from "@angular/platform-browser";

export class Foto {

    constructor() {
        this.id = 0;
        this.imagem = '';
        this.idFuncionario = 0;
    }

    id: number;
    imagem: SafeUrl;
    idFuncionario: number;

}
