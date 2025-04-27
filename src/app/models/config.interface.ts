export interface BrandConfig {
    primaryColor: string;
    backgroundColor: string;
    textColor: string;
    accentColor: string;
    fontFamily: string;
  }
  
  export interface AppConfig {
    appName: string;
    logoUrl: string;
    brand: BrandConfig;
    theme: string;
  }