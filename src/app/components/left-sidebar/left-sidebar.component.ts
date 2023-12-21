import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AccountService } from 'src/app/utils/accounts.service';
import { LeftMenuService } from 'src/app/utils/left-menu.service';
import { ThemeService } from 'src/app/utils/theme.service';

@Component({
  selector: 'left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.scss'],
})
export class LeftSidebarComponent implements OnInit {
  menuItems: any[] = [];
  accounts: any[] = [];
  activeAccount;
  isAccordionOpen: Boolean = false;
  modalRef?: BsModalRef;
  activeColor: string;
  selectedTheme: string = 'dark';
  textColor: string = '#fff';
  fontSizeWidth: string = '10%';
  dynamicFill: string;
  profileShapePathColor: string;

  constructor(
    private leftMenuService: LeftMenuService,
    private accountService: AccountService,
    private modalService: BsModalService,
    private themeService: ThemeService
  ) {
    this.menuItems = leftMenuService.getLeftMenu();
    this.accounts = accountService.getAccounts();
    this.activeAccount = accountService.getActiveAccount();
  }

  ngOnInit(): void {
    this.selectedTheme = this.themeService.getThemeColor();
    this.activeColor = this.themeService.getColor();
    if (this.selectedTheme == 'dark' || this.selectedTheme == 'dim') {
      this.dynamicFill = '#fff';
      this.profileShapePathColor = '#000';
    } else {
      this.dynamicFill = '#000';
      this.profileShapePathColor = '#fff';
    }
  }

  log(event: boolean) {
    this.isAccordionOpen = event ? true : false;
  }

  changeAccount(id: number) {
    this.accountService.setAccountActive(id);
    this.activeAccount = this.accountService.getActiveAccount();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  changeTheme(theme: string) {
    if (this.selectedTheme == 'dark' || this.selectedTheme == 'dim') {
      this.dynamicFill = '#fff';
      this.profileShapePathColor = '#000';
    } else {
      this.dynamicFill = '#000';
      this.profileShapePathColor = '#fff';
    }

    this.selectedTheme = theme;

    this.themeService.setTheme(this.selectedTheme);

    document.body.setAttribute('data-theme', this.selectedTheme);
  }

  changeColor(color: string) {
    this.themeService.setColor(color);
    document.body.setAttribute('data-color', this.themeService.getColor());
    this.activeColor = this.themeService.getColor();
  }
}
