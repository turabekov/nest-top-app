import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from './models/product.model';

@Module({
	controllers: [ProductController],
	imports: [MongooseModule.forFeature([
		{ name: Product.name, schema: ProductSchema }
	])]
})
export class ProductModule { }
