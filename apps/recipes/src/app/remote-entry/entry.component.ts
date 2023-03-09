import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchComponent } from '@eaa/recipes/feature/search';

@Component({
  standalone: true,
  imports: [CommonModule, SearchComponent],
  selector: 'eaa-recipes-entry',
  template: `<eaa-recipes-search></eaa-recipes-search>`,
})
export class RemoteEntryComponent {}
