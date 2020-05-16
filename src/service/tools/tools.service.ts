import { Injectable } from '@nestjs/common';
import * as svgCaptcha from 'svg-captcha';
import {CaptchaObj} from "svg-captcha";

@Injectable()
export class ToolsService{
     captcha(): CaptchaObj{
        return svgCaptcha.create(
            {
                size: 4,
                fontSize: 50,
                width: 100,
                height: 32,
                background: '#cc99bb'
            }
        )
    }
}
