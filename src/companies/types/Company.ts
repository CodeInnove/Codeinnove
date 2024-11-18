export type Company = {
    _id: string;
    name: string;
    email: string;
    //address: Address;
    tinNumber: string; //Esta propriedade armazena o número de identificação fiscal da empresa
    //contacts: CompanyContact[]; //Esta propriedade armazena os contatos da empresa
    createdAt: Date; //Esta propriedade armazena a data de criação do registro da empresa.
    updatedAt: Date; // Esta propriedade armazena a data da última atualização do registro da empresa
  };