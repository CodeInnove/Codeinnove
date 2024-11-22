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
/* Este método é responsável por configurar um listener para o evento 
beforeExit do processo Node.js.

process.on('beforeExit', ...): Registra um listener que será chamado 
quando o processo Node.js estiver prestes a sair.

await app.close(): Quando o evento beforeExit é emitido, o método 
app.close() é chamado, que encerra a aplicação NestJS. Isso é útil 
para garantir que todos os recursos sejam liberados corretamente 
antes que o processo termine.*/