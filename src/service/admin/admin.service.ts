import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";

@Injectable()
export class AdminService {
    constructor(@InjectModel('Admin') private readonly adminModule) {
    }

    async find(){
        return await this.adminModule.find();
    }
}
