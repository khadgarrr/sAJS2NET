import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { BalanceAccount } from "app/shared";
import { AccountsService } from "../accounts.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-accounts-list",
  templateUrl: "./accounts-list.component.html",
  styleUrls: ["./accounts-list.component.css"]
})
export class AccountsListComponent implements OnInit {
  @Input() accounts: BalanceAccount[];
  @Output() onCurrentAccount: EventEmitter<BalanceAccount> = new EventEmitter();

  constructor(private router: Router) {}

  ngOnInit() {}

  selectAccount(account: BalanceAccount) {
    this.onCurrentAccount.emit({ ...account });
  }

  selectAccountWithRouter(account: BalanceAccount) {
    let emitter = this.onCurrentAccount;

    this.router.navigate(["accounts/", account.ID]).then(() => emitter.emit());
  }
}
