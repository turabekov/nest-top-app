import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common'
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { AuthDto } from '../src/auth/dto/auth.dto';
import { disconnect } from 'mongoose';

const loginDto: AuthDto = {
	login: 'xumoyun1@gmail.com',
	password: '12345678',
}

describe('AuthController (e2e)', () => {
	let app: INestApplication

	beforeEach(async () => {
		const moduleFixture: TestingModule = await Test.createTestingModule({
			imports: [AppModule],
		}).compile();

		app = moduleFixture.createNestApplication();
		await app.init()
	});

	it("/auth/login (POST) - success", async () => {
		return request(app.getHttpServer())
			.post("/auth/login")
			.send(loginDto)
			.expect(200)
			.then(({ body }: request.Response) => {
				expect(body.accessToken).toBeDefined()
			});
	})

	it("/auth/login (POST) - failure password", async () => {
		return request(app.getHttpServer())
			.post("/auth/login")
			.send({ ...loginDto, password: '3' })
			.expect(401, {
				statusCode: 401,
				message: 'wrong password',
				error: "Unauthorized"
			})
	})

	it("/auth/login (POST) - failure password", async () => {
		return request(app.getHttpServer())
			.post("/auth/login")
			.send({ ...loginDto, login: 'aa@a.com' })
			.expect(401, {
				statusCode: 401,
				message: 'user with given email not found',
				error: "Unauthorized"
			})
	})

	afterAll(() => {
		disconnect()
	})
})