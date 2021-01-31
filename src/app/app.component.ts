import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'aiholding-task';

  constructor() {
    sessionStorage.setItem('locale', 'en');
  }
}
