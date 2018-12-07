import { Component, OnInit } from "@angular/core";
import { BalanceAccount } from "app/shared";
import { AccountsService } from "./accounts.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-accounts",
  templateUrl: "./accounts.component.html",
  styleUrls: ["./accounts.component.css"]
})
export class AccountsComponent implements OnInit {
  public accounts: BalanceAccount[];
  public currentAccount: BalanceAccount;

  constructor(
    private service: AccountsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.service.getAccounts().subscribe(
      data => {
        this.accounts = data;

        this.readUrl();
      },
      error => {
        this.accounts = [];
        console.log(error);
      }
    );
  }

  public readUrl(): void {
    let id: number = this.route.snapshot.params["id"];

    let found = this.accounts.find(item => item.ID == id);

    if (found) this.editAccountCopy(found);
  }

  editAccountCopy(account: BalanceAccount): void {
    this.currentAccount = { ...account };
  }

  updateAccount(account: BalanceAccount): void {
    let selected = this.accounts.find(item => item.ID === account.ID);

    if (selected) Object.assign(selected, account);
  }
}
