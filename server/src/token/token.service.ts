import { Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import {} from '../../lib/utils';
import { TOKENS, TOKEN_EXPIRATIONS } from 'lib/constants';


@Injectable()
export class TokenService {
    generateToken(payload: any, options?: jwt.SignOptions) {
        return jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: TOKEN_EXPIRATIONS[TOKENS.auth_token], ...(options && options) });
    }

    verifyToken(token: string): any {
        try {
            const decoded = jwt.verify(token, process.env.SECRET_KEY);
            return decoded;
        } catch (error) {
            return null;
        }
    }
}
