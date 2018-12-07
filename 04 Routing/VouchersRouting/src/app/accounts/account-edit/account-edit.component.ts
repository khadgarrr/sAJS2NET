import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { BalanceAccount } from "app/shared";

@Component({
  selector: "app-account-edit",
  templateUrl: "./account-edit.component.html",
  styleUrls: ["./account-edit.component.css"]
})
export class AccountEditComponent implements OnInit {
  @Input() currentAccount: BalanceAccount;
  @Output() onUpdateAccount: EventEmitter<BalanceAccount> = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  updateAccount(account: BalanceAccount): void {
    this.onUpdateAccount.emit(account);
  }
}
