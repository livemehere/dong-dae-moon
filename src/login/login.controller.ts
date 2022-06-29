import { LoginService } from './login.service';
import { LoginDto } from './dto/login.dto';
import { Body, Controller, Get, HttpCode, Post, Query } from '@nestjs/common';

@Controller('login')
export class LoginController {
  constructor(private loginService: LoginService) {}

  @Get()
  loginWithGet(@Query('uid') uid: string) {
    return this.loginService.loginWithGet(uid);
  }

  @Post()
  @HttpCode(200)
  login(@Body() loginDto: LoginDto) {
    return this.loginService.login(loginDto);
  }
}
