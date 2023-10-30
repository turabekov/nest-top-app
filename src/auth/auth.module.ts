import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Auth, AuthSchema } from './models/auth.model';

@Module({
	controllers: [AuthController],
	// providers: [],
	imports: [
		MongooseModule.forFeature([
			{ name: Auth.name, schema: AuthSchema },
		])
	]
})
export class AuthModule { }
