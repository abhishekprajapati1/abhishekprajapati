import { BadRequestException, CanActivate, ExecutionContext, Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { TokenService } from '../token/token.service';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';
import { PUBLIC_KEY } from './decorators/public.decorator';
import { TOKENS } from '../../lib/constants';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private readonly tokenService: TokenService, private reflector: Reflector) { }

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const isPublic = this.reflector.getAllAndOverride<boolean>(PUBLIC_KEY, [context.getHandler(), context.getClass()]);
        if (isPublic) return true;


        const request = context.switchToHttp().getRequest();

        const token = this.extractTokenFromHeader(request);
        if (!token) {
            throw new UnauthorizedException({ success: false, message: "Access denied !!" });
        }

        try {
            const payload = this.tokenService.verifyToken(token);
            if (!payload) throw new BadRequestException({ success: false, message: "Access denied !!" });
            request['user'] = payload;
        } catch (error) {
            throw new UnauthorizedException({ success: false, message: "Access denied !!" });
        }

        return true;
    }

    extractTokenFromHeader(request: Request): string {
        const token = request.cookies[TOKENS.auth_token] || request.headers['authorization'];
        return token;
    }
}