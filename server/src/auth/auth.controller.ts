import { BadRequestException, Body, Controller, Logger, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post("login")
    async login(@Body() loginDto: LoginDto) {
        const user = await this.authService.validateUser(loginDto.username, loginDto.password);
        if (!user) throw new BadRequestException({ success: false, message: "Invalid username or password." });
        return { success: true, data: user, message: "Logged in successfully" }
    }
}
