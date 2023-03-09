import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { RecipesApiRecipesModule } from '@enterprise-angular-architecture/recipes-api/recipes';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [RecipesApiRecipesModule, ConfigModule.forRoot({ isGlobal: true })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
