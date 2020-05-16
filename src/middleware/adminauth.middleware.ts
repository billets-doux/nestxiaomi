import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class AdminauthMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    const url: string = req.baseUrl;
    if (!url.startsWith('/admin/login')){
      const userInfo = req.session.userinfo;
      if (userInfo&&userInfo.username){
        next();
      }else {
        res.redirect('/admin/login')
      }
    }else {
      next();
    }


  }
}
