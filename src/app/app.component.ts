import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConfigService } from './service/config.service';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  template: `<app-header></app-header>
            <router-outlet></router-outlet>`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Eliq-drinks-app';
}
