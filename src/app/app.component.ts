import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="cnt">
      <h1 class="mat-display-2">Yext Answers API Demo</h1>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [
    `.cnt { padding: 3em; justify-content: start; }`,
    `h1 { margin-bottom: .2em !important; }`
  ]
})
export class AppComponent {
  title = 'yext-answers';
}
