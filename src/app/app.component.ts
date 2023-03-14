import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularlearn';
  lang = [
    { name: "HTML" },
    { name: "ReactJS" },
    { name: "Angular" },
    { name: "Bootstrap" },
    { name: "PrimeNG" },
  ];
}
