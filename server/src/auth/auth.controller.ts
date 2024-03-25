import { BadRequestException, Body, Controller, Get, HttpStatus, Logger, Post, Query, Req, Res, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { MAX_AGES, TOKENS, TOKEN_DATA, TOKEN_EXPIRATIONS } from 'lib/constants';
import { TokenService } from '../token/token.service';
import { removeCookie, setCookie } from '../../lib/utils';
import { Request, Response } from 'express';
import { ITenant, Tenant } from './decorators/tenant.decorator';
import { PublicApi } from './decorators/public.decorator';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService, private readonly tokenService: TokenService) { }

    @PublicApi()
    @Post("login")
    async login(@Body() loginDto: LoginDto, @Res() response: Response) {
        const user = await this.authService.validateUser(loginDto.username, loginDto.password);
        if (!user) throw new BadRequestException({ success: false, message: "Invalid username or password." });


        let tokenPayload = {
            id: user.id,
            username: user.username
        }

        let refreshTokenPayload = { type: TOKENS.refresh_auth_token, data: tokenPayload, id: user.id };

        const auth_token = this.tokenService.generateToken(tokenPayload);
        const refresh_token = this.tokenService.generateToken(refreshTokenPayload, { expiresIn: TOKEN_EXPIRATIONS[TOKENS.refresh_auth_token] })

        // set tokens in cookie
        // setCookie(response, { name: TOKENS.auth_token, data: auth_token });
        // setCookie(response, { name: TOKENS.refresh_auth_token, data: refresh_token, age: MAX_AGES[TOKENS.refresh_auth_token] });


        return response.status(HttpStatus.OK).json({
            success: true,
            data: {
                auth_token: { value: auth_token, life: Date.now() + MAX_AGES[TOKENS.auth_token] },
                refresh_token
            },
            message: "Logged in successfully."
        });
    }

    @Post("logout")
    logout(@Res() response: Response, @Req() req: Request) {
        const cookies = req.cookies;
        for (let key in cookies) {
            removeCookie(response, key);
        }
        return response.status(HttpStatus.OK).json({ success: true, message: "Logged out successfully." });
    }


    @Get("details")
    async getLoggedUserDetails(@Tenant() user: ITenant) {
        const data = await this.authService.getDetails({ user_id: user.id });
        return { success: true, data }
    }

    @Get("refresh-token")
    refreshToken(@Req() req: Request, @Res() response: Response, @Tenant() user: ITenant) {
        const refreshToken = req?.cookies?.[TOKENS.refresh_auth_token] || req.headers['refresh_token'];
        const refreshPayload = this.tokenService.verifyToken(refreshToken);

        if (refreshPayload.type !== TOKENS.refresh_auth_token || refreshPayload.id !== user.id) {
            throw new UnauthorizedException({ success: false, message: "Invalid refresh token." });
        }

        const auth_token = this.tokenService.generateToken(refreshPayload.data);
        const refreshTokenPayload = { type: TOKENS.refresh_auth_token, data: refreshPayload.data, id: user.id };
        const refresh_token = this.tokenService.generateToken(refreshTokenPayload, { expiresIn: TOKEN_EXPIRATIONS[TOKENS.refresh_auth_token] })
        // setCookie(response, { data: auth_token, name: TOKENS.auth_token });
        // setCookie(response, { data: refresh_token, name: TOKENS.refresh_auth_token, age: MAX_AGES[TOKENS.refresh_auth_token] })

        return response.status(HttpStatus.OK).json({
            success: true,
            data: {
                auth_token: {
                    value: auth_token,
                    life: Date.now() + MAX_AGES[TOKENS.auth_token]
                },
                refresh_token
            },
            message: "Token refreshed successfully"
        })
    }
}
