import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { Test } from '@nestjs/testing';
import { of } from 'rxjs';

import { RecipesApiRecipesService } from './recipes-api-recipes.service';

describe('RecipesApiRecipesService', () => {
  let service: RecipesApiRecipesService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        RecipesApiRecipesService,
        {
          provide: HttpService,
          useValue: { get: jest.fn().mockReturnValue(of({ data: 'chicken' })) },
        },
        {
          provide: ConfigService,
          useValue: {
            get: jest.fn().mockReturnValue('123'),
          },
        },
      ],
    }).compile();

    service = module.get(RecipesApiRecipesService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });

  it('should build url', () => {
    const res = service.urlBuilder('recipes/v2', 'chicken');
    expect(res).toEqual(
      'https://api.edamam.com/api/recipes/v2?app_id=123&app_key=123&type=public&q=chicken'
    );
  });

  it('should return recipes', async () => {
    await service.getRecipes('chicken').then((res) => {
      expect(res).toEqual('chicken');
    });
  });
});
