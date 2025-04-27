import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../models/config.interface';
import { firstValueFrom } from 'rxjs';
import { defaultConfig } from '../models/default-config';

@Injectable({ providedIn: 'root' })
export class ConfigService {
  private readonly configUrl = '/assets/config.json';

  private config: AppConfig =defaultConfig

  constructor(private http: HttpClient) {}

  async loadConfig(): Promise<void> {
    try {
      this.config = await firstValueFrom(this.http.get<AppConfig>(this.configUrl));
    } 
    catch (error) {
      this.config = defaultConfig; // Fallback to default config
    }
  }

  getConfig() {
    return this.config;
  }

  setConfig(config: AppConfig) {
    this.config = config;
  }
}