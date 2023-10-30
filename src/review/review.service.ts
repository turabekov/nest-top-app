import { CreateReviewDto } from './dto/create-review.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Review, ReviewDocument } from './models/review.model';
import { Model, Types } from 'mongoose';

class DeleteResult {
	acknowledged: boolean;
	deletedCount: number;
}

@Injectable()
export class ReviewService {
	constructor(@InjectModel(Review.name) private readonly reviewModel: Model<ReviewDocument>) {

	}

	// Promise<DocumentType<Review>>
	async create(dto: CreateReviewDto): Promise<ReviewDocument> {
		return this.reviewModel.create(dto)
	}

	// Promise<DocumentType<Review> | null>
	async delete(id: string): Promise<ReviewDocument | null> {
		return this.reviewModel.findByIdAndDelete(id).exec();
	}

	async findByProductId(productId: string): Promise<ReviewDocument[]> {
		return this.reviewModel.find({ productId: new Types.ObjectId(productId) }).exec()
	}

	async deleteByProductId(productId: string): Promise<DeleteResult> {
		return this.reviewModel.deleteMany({
			productId: new Types.ObjectId(productId),
		}).exec();
	}


}
