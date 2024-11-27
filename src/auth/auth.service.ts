import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { error } from 'console';
import { UnsubscriptionError } from 'rxjs';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService) {}

    async validateUser(email: string, password: string) {
        const user = await this.userService.findByEmail(email);

        if (user) {
            // checar se a senha informada corresponde a hash que esta no banco
            const isPasswordid = await bcrypt.compare(password, user.password);

            if (isPasswordid) {
                return {
                    ...user,
                    password: undefined,
                }
            }
        }
        // se chegar aqui é pk nao encontrou um user/password
        throw new Error('email address or password provided is incorrect')
    } 
}
