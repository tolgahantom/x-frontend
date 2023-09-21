import { Component, ViewChild } from '@angular/core';
import { OverlayPanel } from 'primeng/overlaypanel';
import { LeftMenuService } from 'src/app/utils/left-menu.service';

@Component({
  selector: 'left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.scss'],
})
export class LeftSidebarComponent {
  menuItems: any[] = [];
  @ViewChild('op') op: OverlayPanel | undefined;

  constructor(private leftMenuService: LeftMenuService) {
    this.menuItems = leftMenuService.getLeftMenu();
    console.log(this.menuItems[1].icon.passive);
  }
}
