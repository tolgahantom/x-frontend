import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private themeColor: string = 'dark';
  private selectedColor: string = 'blue';

  getThemeColor() {
    return this.themeColor;
  }

  setTheme(theme: string) {
    this.themeColor = theme;
  }

  getColor() {
    return this.selectedColor;
  }

  setColor(color: string) {
    this.selectedColor = color;
  }
}
