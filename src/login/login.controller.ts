import { LoginService } from './login.service';
import { LoginDto } from './dto/login.dto';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('login')
export class LoginController {
  constructor(private loginService: LoginService) {}

  @Post()
  login(@Body() loginDto: LoginDto) {
    return this.loginService.login(loginDto);
  }
}
