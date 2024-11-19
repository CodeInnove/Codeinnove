export type Company = {
    _id: string;                   // Identificador único da empresa
    name: string;                  // Nome da empresa
    email: string;                 // Email de contato da empresa
    phone: string;                 // Telefone de contato
    registrationNumber: string;    // Número de registro da empresa (CNPJ no Brasil)
    website?: string;              // Website da empresa (opcional)
    industry: string;              // Setor da empresa
    establishedDate: Date;         // Data de fundação
    employeesCount: number;        // Número de funcionários
    password: string;              // Senha para acesso (se necessário)
    passwordResetToken?: string;   // Token para redefinição de senha (opcional)
    passwordResetExpires?: Date;   // Data de expiração do token de redefinição de senha (opcional)
};