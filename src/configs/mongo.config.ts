import { ConfigService } from '@nestjs/config';
import { MongooseModuleFactoryOptions } from '@nestjs/mongoose';

export const getMongoConfig = async (configService: ConfigService): Promise<MongooseModuleFactoryOptions> => {
	return {
		uri: getMongoString(configService),
		...getMongoOptions,
	};
};

const getMongoString = (configService: ConfigService): string => {
	const str: string = 'mongodb://' +
		configService.get('MONGO_LOGIN') +
		':' +
		configService.get('MONGO_PASSWORD') +
		'@' +
		configService.get('MONGO_HOST') +
		':' +
		configService.get('MONGO_PORT') +
		'/' +
		configService.get('MONGO_AUTH_DB')

	return str;
}

const getMongoOptions = () => ({
	// useNewUrlParser: true,
	// useUnifiedTopology: true,
	// autoIndex: true
});