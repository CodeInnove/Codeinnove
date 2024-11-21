import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()

/*await this.$connect(): Aqui, o serviço se conecta ao banco de dados
usando o Prisma. Isso garante que a conexão com o banco de dados 
esteja estabelecida antes que a aplicação comece a processar 
requisições. */
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }


  async enableShutdownHooks(app: INestApplication) {
    process.on('beforeExit', async () => {
      await app.close();
    });
  }
}
