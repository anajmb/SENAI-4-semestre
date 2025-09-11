export interface IUsuario {
  nome: string;
  email: string;
  senha: string;
  id: number;
  telefone?: string;
  endereço: string | number | undefined;
  
}