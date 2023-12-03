import { Component, OnInit } from '@angular/core';
import { ThemeService } from './utils/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'x-frontend';

  currentThemeColor: string;

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    document.body.setAttribute('data-theme', this.themeService.getThemeColor());
    document.body.setAttribute('data-color', this.themeService.getColor());
  }
}
