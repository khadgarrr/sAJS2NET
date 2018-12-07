import { Component, OnInit } from "@angular/core";
import { AccountsService } from "./accounts.service";
import { Accounts } from "./accounts.model";

@Component({
  selector: "app-accounts",
  templateUrl: "./accounts.component.html",
  styleUrls: ["./accounts.component.css"]
})
export class AccountsComponent implements OnInit {
  public data: Accounts[];

  constructor(private service: AccountsService) {
    this.data = [];
  }

  ngOnInit() {
    this.service.loadData().subscribe(data => (this.data = data));
  }
}
