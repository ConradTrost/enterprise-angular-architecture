import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class RecipesApiRecipesService {
  baseUrl = 'https://api.edamam.com/api';
  appId = '';
  appKey = '';

  constructor(private http: HttpService, private configService: ConfigService) {
    this.appId = this.configService.get<string>('EDAMAM_APP_ID');
    this.appKey = this.configService.get<string>('EDAMAM_APP_KEY');
  }

  urlBuilder(route: string, query: string) {
    return `${this.baseUrl}/${route}?app_id=${this.appId}&app_key=${this.appKey}&type=public&q=${query}`;
  }

  async getRecipes(query: string) {
    const url = this.urlBuilder('recipes/v2', query);
    const { data } = await firstValueFrom(this.http.get(url));
    return data;
  }
}
