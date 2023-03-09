import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [CommonModule, NxWelcomeComponent],
  selector: 'enterprise-angular-architecture-recipes-entry',
  template: `<enterprise-angular-architecture-nx-welcome></enterprise-angular-architecture-nx-welcome>`,
})
export class RemoteEntryComponent {}
