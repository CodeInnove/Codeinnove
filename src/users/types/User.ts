export type User = {
    _id: string;
    name: string;
    email: string;
    phone: string;
    birthdate: Date;
    cpf: string;
    rg: string;
    password: string;
    passwordResetToken: string;
    passwordResetExpires?: Date;
    //address: Address;

}