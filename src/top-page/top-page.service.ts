import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { TopPage, TopPageDocument } from './models/top-page.model';
import { Model } from 'mongoose';
import { CreateTopPageDto } from './dto/create-toppage.dto';
import { FindTopPageDto } from './dto/find-top-page.dto';

@Injectable()
export class TopPageService {
	constructor(
		@InjectModel(TopPage.name) private readonly topPageModel: Model<TopPageDocument>,
	) { }

	async create(dto: CreateTopPageDto) {
		return this.topPageModel.create(dto);
	}

	async findById(id: string) {
		return this.topPageModel.findById(id).exec()
	}

	async findByAlias(alias: string) {
		return this.topPageModel.findOne({ alias }).exec()
	}

	async deleteById(id: string) {
		return this.topPageModel.findByIdAndDelete(id).exec()
	}

	async updateById(id: string, dto: CreateTopPageDto) {
		return this.topPageModel.findByIdAndUpdate(id, dto, { new: true })
	}

	async find(dto: FindTopPageDto) {
		console.log("service ")
		console.log(dto.firstLevelCategory)
		return await this.topPageModel.find({ firstLevelCategory: dto.firstLevelCategory }).exec()
	}

}
