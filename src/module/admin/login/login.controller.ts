import {Controller, Get, Render,Request,Response} from '@nestjs/common';
import {ToolsService} from "../../../service/tools/tools.service";
import {CaptchaObj} from "svg-captcha";

@Controller('admin/login')
export class LoginController {

   constructor(private  toolsService:ToolsService) {
   }
    @Get()
    @Render('admin/login')
    index(){
        return {};
    }

    @Get('code')
    getCode(@Request() req,@Response() res){
       const captcha = this.toolsService.captcha();
       req.session.captcha = captcha;
       res.type('image/svg+xml');
       res.send(captcha.data);

    }
}
