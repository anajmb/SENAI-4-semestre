import type { IProduto } from "./IProduto";
import type { IUsuario } from "./IUsuario";

export interface IPedido{
    id: number;
    titulo: string;

    usuario: IUsuario;
    produtos: IProduto[];
}