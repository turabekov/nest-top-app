import { Injectable } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './models/user.model';
import { Model } from 'mongoose';
import { genSaltSync, hashSync } from "bcryptjs";

@Injectable()
export class AuthService {
	constructor(
		@InjectModel(User.name) private userModel: Model<UserDocument>
	) { }

	async createUser(dto: AuthDto) {
		const salt = genSaltSync(10);
		const newUser = new this.userModel({
			email: dto.login,
			passwordHash: hashSync(dto.password, salt)
		})
		return newUser.save()
	}

	async findUser(email: string) {
		return this.userModel.findOne({ email }).exec()
	}
}
