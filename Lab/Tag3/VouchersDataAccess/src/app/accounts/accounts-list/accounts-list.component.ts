import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { Router } from "@angular/router";
import { BalanceAccount } from "../../shared/model/model";
import { AccountsService } from "../accounts.service";
import { BalanceAccountStatus } from "../model";

@Component({
  selector: "app-accounts-list",
  templateUrl: "./accounts-list.component.html",
  styleUrls: ["./accounts-list.component.css"]
})
export class AccountsListComponent implements OnInit {
  accounts: BalanceAccount[];

  constructor(private service: AccountsService, private router: Router) {
    this.accounts = [];
  }

  ngOnInit() {
    this.service.getAccounts().subscribe(
      data => (this.accounts = data),
      error => {
        console.log(error);
        this.accounts = [];
      }
    );

    this.router.navigate(["", { outlets: { sidebarOutlet: ["test", 0] } }]);
    // this.router.navigate(['',{outlets: { sidebarOutlet : null}}])
  }

  editAccount(account: BalanceAccount): void {
    this.router.navigate(["accounts/", account.ID]);
  }

  deleteAccount(account: BalanceAccount): void {
    this.service.deleteAccount(account);
  }

  addAccount(): void {
    this.router.navigate(["accounts/", BalanceAccountStatus.NEW]);
  }
}
