import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './models/user.model';
import { AuthService } from './auth.service';

@Module({
	controllers: [AuthController],
	// providers: [],
	imports: [
		MongooseModule.forFeature([
			{ name: User.name, schema: UserSchema },
		])
	],
	providers: [AuthService]
})
export class AuthModule { }
