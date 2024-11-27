import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { error } from 'console';
import { User } from 'src/user/entities/user.entity';
import { UserPayload } from './models/UserPayload';
import { JwtService } from '@nestjs/jwt';
import { UserToken } from './models/UserToken';

@Injectable()
export class AuthService {
    
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService
    ) {}

    login(user: User): UserToken {
        // trasfroma o user em um JWT
        const payload: UserPayload = {
            sub: user.id,
            email: user.email,
            name: user.name
         };

        const jwtToken = this.jwtService.sign(payload)

        return{
            access_token: jwtToken,
        }
    }

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
        throw new error('email address or password provided is incorrect')
    } 
}
