import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="cnt">
      <button *ngFor="let btn of buttons" mat-raised-button [color]="btn.color" class="mat-display-1" [routerLink]="btn.link">
        <mat-icon class="button-icon">{{btn.icon}}</mat-icon>
        {{btn.text}}
      </button>
    </div>
  `,
  styles: [
    `button { 
      min-width: 50vw; 
      min-height: 12vh; 
      margin-bottom: 1em !important; 
    }`,
    `.button-icon { 
      transform: scale(1.5);
      margin-right: 0.5em;
    }`
  ]
})
export class HomeComponent {
  buttons = [
    { color: '', link: '/universal-autocomplete', icon: 'speaker_notes', text: 'Universal Autocomplete' },
    { color: 'primary', link: '/universal-query', icon: 'travel_explore', text: 'Universal Query' },
    { color: 'accent', link: '/vertical-autocomplete', icon: 'textsms', text: 'Vertical Autocomplete' },
    { color: 'warn', link: '/vertical-query', icon: 'find_in_page', text: 'Vertical Query' },
  ];
}
