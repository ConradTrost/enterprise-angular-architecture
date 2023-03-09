import { Test } from '@nestjs/testing';

import { RecipesApiRecipesController } from './recipes-api-recipes.controller';
import { RecipesApiRecipesService } from './recipes-api-recipes.service';

describe('RecipesApiRecipesController', () => {
  let controller: RecipesApiRecipesController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        {
          provide: RecipesApiRecipesService,
          useValue: {
            getRecipes: jest.fn().mockResolvedValue({ name: 'chicken' }),
          },
        },
      ],
      controllers: [RecipesApiRecipesController],
    }).compile();

    controller = module.get(RecipesApiRecipesController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });

  it('should return recipes', async () => {
    const result = await controller.getRecipes('chicken');
    expect(result).toEqual({ name: 'chicken' });
  });
});
