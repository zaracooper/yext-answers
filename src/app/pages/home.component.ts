import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="cnt">
      <button mat-raised-button class="mat-display-1" routerLink="/universal-autocomplete">
        <mat-icon class="button-icon">speaker_notes</mat-icon>
        Universal Autocomplete
      </button>
      <button mat-raised-button color="primary" class="mat-display-1" routerLink="/universal-query">
        <mat-icon class="button-icon">travel_explore</mat-icon>
        Universal Query
      </button>
      <button mat-raised-button color="accent" class="mat-display-1" routerLink="/vertical-autocomplete">
        <mat-icon class="button-icon">textsms</mat-icon>
        Vertical Autocomplete
      </button>
      <button mat-raised-button color="warn" class="mat-display-1" routerLink="/vertical-query">
        <mat-icon class="button-icon">find_in_page</mat-icon>
        Vertical Query
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
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
