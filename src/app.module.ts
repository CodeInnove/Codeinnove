import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CompaniesModule } from './companies/companies.module';
import { EnterpriseModule } from './enterprise/enterprise.module';
import { ProjectsModule } from './projects/projects.module';
import { ProposalsModule } from './proposals/proposals.module';
import { ReviewsModule } from './reviews/reviews.module';
import { PaymentsModule } from './payments/payments.module';
import { CategorysModule } from './categorys/categorys.module';
import { SkillsModule } from './skills/skills.module';

@Module({
  imports: [UsersModule, CompaniesModule, EnterpriseModule, ProjectsModule, ProposalsModule, ReviewsModule, PaymentsModule, CategorysModule, SkillsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
