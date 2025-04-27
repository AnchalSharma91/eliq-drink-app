import { Component } from '@angular/core';
import { ConfigService } from '../../service/config.service';
import { AppConfig } from '../../models/config.interface';
import { Router } from '@angular/router';
import { defaultConfig } from '../../models/default-config';
import { SearchService } from '../../service/search-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  config: AppConfig = defaultConfig; // Initialize with default config

  constructor(private configService: ConfigService, private router: Router, private searchService: SearchService) {
    this.configService.loadConfig().then(() => {
      this.config = this.configService.getConfig();
    });
  }

  // Navigate to the home page if the user clicks on the logo or the title.
  goToHome(){
    this.router.navigate(['/']);
  }

  onSearch(term: Event) {
    const target = term.target as HTMLInputElement;  
    const searchTerm = target.value;
    this.searchService.setSearchTerm(searchTerm);
  }

  //this is a dummy function to switch the theme 
  toggleTheme() {
    if (this.config) {
       this.config.theme = this.config.theme === 'light' ? 'dark' : 'light';
       this.configService.setConfig(this.config);
    }
  }
}
