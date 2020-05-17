import {Controller, Get, Render,Request,Response} from '@nestjs/common';
import {ToolsService} from "../../../service/tools/tools.service";
import {CaptchaObj} from "svg-captcha";
import {AdminService} from "../../../service/admin/admin.service";

@Controller('admin/login')
export class LoginController {

   constructor(private  toolsService:ToolsService,private adminService:AdminService) {
   }
    @Get()
    @Render('admin/login')
    async index(){
       console.log(await this.adminService.find())
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
