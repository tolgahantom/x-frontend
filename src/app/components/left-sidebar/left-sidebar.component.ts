import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AccountService } from 'src/app/utils/accounts.service';
import { LeftMenuService } from 'src/app/utils/left-menu.service';
import { Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.scss'],
})
export class LeftSidebarComponent {
  menuItems: any[] = [];
  accounts: any[] = [];
  activeAccount;
  isAccordionOpen: Boolean = false;
  modalRef?: BsModalRef;
  activeColor: string = 'blue';
  selectedTheme: string = 'dark';

  constructor(
    private leftMenuService: LeftMenuService,
    private accountService: AccountService,
    private modalService: BsModalService,
    private renderer: Renderer2,
    private el: ElementRef
  ) {
    this.menuItems = leftMenuService.getLeftMenu();
    this.accounts = accountService.getAccounts();
    this.activeAccount = accountService.getActiveAccount();
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

  changeColor(color: string) {
    this.activeColor = color;
    const colorPalette = [
      'yellow',
      'blue',
      'pink',
      'purple',
      'orange',
      'green',
    ];
    colorPalette.forEach((color) => {
      this.el.nativeElement.parentElement.parentElement.parentElement.classList.remove(
        color
      );
    });
    this.el.nativeElement.parentElement.parentElement.parentElement.classList.add(
      color
    );
  }

  changeTheme(theme: string) {
    this.selectedTheme = theme;
  }
}
