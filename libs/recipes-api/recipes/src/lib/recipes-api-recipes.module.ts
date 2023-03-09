import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';

import { RecipesApiRecipesController } from './recipes-api-recipes.controller';
import { RecipesApiRecipesService } from './recipes-api-recipes.service';

@Module({
  imports: [HttpModule],
  controllers: [RecipesApiRecipesController],
  providers: [RecipesApiRecipesService],
  exports: [RecipesApiRecipesService],
})
export class RecipesApiRecipesModule {}
