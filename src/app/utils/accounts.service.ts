import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private accounts: any[] = [
    {
      id: 1,
      pp: 'https://images.mubicdn.net/images/cast_member/3231/cache-282-1628211814/image-w856.jpg?size=800x',
      name: 'Tobey Maguire',
      username: 'tobeymaguire01',
      activeAccount: true,
    },
    {
      id: 2,
      pp: 'https://i.pinimg.com/736x/2e/2c/97/2e2c97d37eebe5d9b4af2ea31c2c66fe.jpg',
      name: 'Tobey V2',
      username: 'faketobey01',
      activeAccount: false,
    },
  ];

  getAccounts() {
    return this.accounts;
  }

  setAccountActive(passiveId: number) {
    this.accounts.forEach((element) => {
      element.activeAccount = false;
    });

    const SelectAccount = this.accounts.filter(
      (element) => element.id == passiveId
    );
    SelectAccount[0].activeAccount = true;
  }

  getActiveAccount() {
    return this.accounts.find((el) => el.activeAccount);
  }
}
