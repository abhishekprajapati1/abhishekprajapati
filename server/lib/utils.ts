import * as bcrypt from 'bcrypt';
import { Response } from 'express';
import { MAX_AGES, TOKENS } from './constants';

export const hashString = (str: string): string => {
    return bcrypt.hashSync(str, 10);
}

export const compareString = (str: string, hash: string): boolean => {
    return bcrypt.compareSync(str, hash);
}

export const setCookie = (response: Response, { data, age, name }: { data: any, age?: number, name: string }): void => {
    response.cookie(name, data, {
        ...(!Boolean(process.env.DEV_ENVIRONMENT) && { domain: "abhishekprajapati.vercel.app" }),
        maxAge: age || MAX_AGES[TOKENS.auth_token],
        httpOnly: true,
        sameSite: "none",
        secure: true,
    })
}

export const removeCookie = (response: Response, name: string): void => {
    response.clearCookie(name, {
        ...(!Boolean(process.env.DEV_ENVIRONMENT) && { domain: "abhishekprajapati.vercel.app" })
    })
}