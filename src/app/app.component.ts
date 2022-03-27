import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="cnt">
      <h1 class="mat-display-2" routerLink="/">Yext Answers Core API Demo</h1>
      <hr>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [
    `hr { width: 10vw; margin-bottom: 2em; }`,
    `div.cnt { padding-top: 5em; }`,
    `h1 { margin-bottom: .2em !important; }`
  ]
})
export class AppComponent {
  title = 'yext-answers';
}
