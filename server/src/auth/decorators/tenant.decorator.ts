import { ExecutionContext, createParamDecorator } from "@nestjs/common";

export interface ITenant {
    id: string;
    username: string;
    iat: number;
}

export const Tenant = createParamDecorator((_data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
})