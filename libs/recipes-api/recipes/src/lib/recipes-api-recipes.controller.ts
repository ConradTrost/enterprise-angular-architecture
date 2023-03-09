import { Controller, Get, Param } from '@nestjs/common';

import { RecipesApiRecipesService } from './recipes-api-recipes.service';

@Controller('recipes')
export class RecipesApiRecipesController {
  constructor(private recipesApiRecipesService: RecipesApiRecipesService) {}

  @Get(':query')
  async getRecipes(@Param('query') query: string) {
    return await this.recipesApiRecipesService.getRecipes(query);
  }
}
