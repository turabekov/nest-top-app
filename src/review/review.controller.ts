import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Review } from './models/review.model';

@Controller('review')
export class ReviewController {
	@Post('create')
	async create(@Body() dto: Omit<Review, '_id'>) {

	}

	@Delete(':id')
	async delete(@Param('id') id: string) {

	}

	@Get('byProduct/:productId')
	async getByProduct(@Param('productId') productId: string) {

	}
}
