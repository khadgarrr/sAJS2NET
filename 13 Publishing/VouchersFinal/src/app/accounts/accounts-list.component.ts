import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { DataStoreService } from "../shared/data-store/data-store-service";
import { ACCOUNT_ADD } from "../shared/event-bus/action.types";
import { EventBusService } from "../shared/event-bus/event-bus.service";
import { BalanceAccount } from "../shared/model/model";
import { IconAdd } from "../shared/table/cmd.type";
import { AccountsService } from "./account.service";
import { MatSnackBar } from "../../../node_modules/@angular/material";

@Component({
  selector: "app-accounts-list",
  templateUrl: "./accounts-list.component.html",
  styleUrls: ["./accounts-list.component.scss"]
})
export class AccountsListComponent implements OnInit {
  accounts: BalanceAccount[];

  constructor(
    private router: Router,
    private store: DataStoreService,
    private ebus: EventBusService,
    public snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.store.getAllAccounts().subscribe(data => (this.accounts = data));
    this.ebus.setCmds([
      { title: "Add Account", action: ACCOUNT_ADD, icon: IconAdd }
    ]);
    this.router.navigate(["", { outlets: { sidebarOutlet: null } }]);
  }

  showAccount(id: number) {
    this.router.navigate(["/accounts/" + id]);
  }

  deleteAcccount(acct: BalanceAccount) {
    this.store.deleteAccount(acct).then(() =>
      this.snackBar.open("Accout deleted", "Vouchers", {
        duration: 500
      })
    );
  }

  addAccount() {
    this.router.navigate(["/accounts/" + 0]);
  }
}
