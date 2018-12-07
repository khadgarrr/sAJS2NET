import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { BalanceAccount } from "../../shared";
import { AccountsService } from "../accounts.service";
import {
  ActivatedRouteSnapshot,
  ActivatedRoute,
  Router
} from "@angular/router";
import { BalanceAccountStatus } from "../model";

@Component({
  selector: "app-account-edit",
  templateUrl: "./account-edit.component.html",
  styleUrls: ["./account-edit.component.css"]
})
export class AccountEditComponent implements OnInit {
  currentAccount: BalanceAccount;

  constructor(
    private service: AccountsService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.currentAccount = {
      ID: 0,
      Name: "",
      Expense: false,
      ActivatedOn: new Date(),
      Deprecated: false
    };
  }

  ngOnInit() {
    let id = this.route.snapshot.params["id"];

    if (id != BalanceAccountStatus.NEW)
      this.service.getAccount(id).subscribe(
        data => {
          this.currentAccount = data;
        },
        error => {
          console.log(error);
        }
      );
  }

  updateAccount(account: BalanceAccount): void {
    if (account.ID)
      this.service
        .updateAccount(account)
        .subscribe(
          data => this.router.navigate(["accounts"]),
          error => console.log(error)
        );
    else {
      this.service.createAccount(account);
      this.router.navigate(["accounts"]);
    }
  }
}
