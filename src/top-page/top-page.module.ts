import { Module } from '@nestjs/common';
import { TopPageController } from './top-page.controller';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { TopPage, TopPageSchema } from './models/top-page.model';

@Module({
	controllers: [TopPageController],
	imports: [
		ConfigModule,
		MongooseModule.forFeature([
			{ name: TopPage.name, schema: TopPageSchema },
		])
	],
})
export class TopPageModule { }
