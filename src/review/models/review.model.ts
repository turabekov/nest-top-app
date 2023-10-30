import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MSchema } from "mongoose";


export type ReviewDocument = HydratedDocument<Review>;

@Schema({ timestamps: true })
export class Review {
	@Prop()
	name: string;

	@Prop()
	title: string;

	@Prop()
	description: string;

	@Prop()
	rating: number;

	// @Prop({ type: MSchema.Types.ObjectId, ref: Product.name })
	@Prop()
	productId: MSchema.Types.ObjectId;
}

export const ReviewSchema = SchemaFactory.createForClass(Review)