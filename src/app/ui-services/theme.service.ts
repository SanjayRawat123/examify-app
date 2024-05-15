// theme.service.ts
import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly DARK_THEME_CLASS = 'dark-theme';
  private readonly THEME_STORAGE_KEY = 'theme';
  private isDarkTheme = false;
  private renderer: Renderer2;

  public get getDarkTheme(): boolean {
    return this.isDarkTheme;
  }

  constructor(private rendererFactory: RendererFactory2) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
    this.loadThemeFromStorage();
    this.applyTheme();
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    this.saveThemeToStorage();
    this.applyTheme();
    return this.isDarkTheme;
  }

  private applyTheme() {
    if (this.isDarkTheme) {
      console.log(this.isDarkTheme);
      this.renderer.addClass(document.body, this.DARK_THEME_CLASS);
    } else {
      console.log("remove dark mode",this.isDarkTheme);
      this.renderer.removeClass(document.body, this.DARK_THEME_CLASS);
    }
  }

  private saveThemeToStorage() {
    localStorage.setItem(
      this.THEME_STORAGE_KEY,
      this.isDarkTheme ? 'dark' : 'light'
    );
  }

  private loadThemeFromStorage() {
    const storedTheme = localStorage.getItem(this.THEME_STORAGE_KEY);
    if (storedTheme === 'dark') {
      this.isDarkTheme = true;
    }
  }
}
