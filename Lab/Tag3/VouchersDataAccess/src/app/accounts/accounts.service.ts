import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, BehaviorSubject } from "rxjs";
import { map } from "rxjs/operators";

import { BalanceAccount } from "../shared";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class AccountsService {
  private data: BalanceAccount[];
  private dataObservable: BehaviorSubject<BalanceAccount[]>;

  constructor(private http: HttpClient) {
    this.data = [];
    this.dataObservable = new BehaviorSubject(this.data);

    this.initAccounts();
  }

  private initAccounts(): void {
    this.http
      .get<BalanceAccount[]>(environment.accountsAPI + "/accounts")
      .subscribe(
        data => {
          this.data = data;
          this.dataObservable.next(this.data);
        },
        error => {
          this.data = [];
          this.dataObservable.next(this.data);
        }
      );
  }

  getAccounts(): Observable<BalanceAccount[]> {
    return this.dataObservable;
  }

  getAccount(id: number): Observable<BalanceAccount> {
    return this.http.get<BalanceAccount>(
      environment.accountsAPI + "/accounts/" + id
    );
  }

  updateAccount(account: BalanceAccount): Observable<BalanceAccount> {
    return this.http.put<BalanceAccount>(
      environment.accountsAPI + "/accounts",
      account
    );
  }

  deleteAccount(account: BalanceAccount): void {
    this.http
      .delete<BalanceAccount>(
        environment.accountsAPI + "/accounts/" + account.ID
      )
      .subscribe(() => {
        this.data = this.data.filter(item => item.ID !== account.ID);
        this.dataObservable.next(this.data);
      });
  }

  createAccount(account: BalanceAccount): void {
    this.http
      .post<BalanceAccount>(environment.accountsAPI + "/accounts", account)
      .subscribe(
        () => {
          // no return from post
          // so we nest

          this.http
            .get<BalanceAccount[]>(environment.accountsAPI + "/accounts")
            .pipe(
              map(items => {
                return items.filter(
                  item => this.data.find(i => i.ID === item.ID) == undefined
                );
              })
            )
            .subscribe(data => {
              this.data = this.data.concat(data);
              this.dataObservable.next(this.data);
            });
        },
        error => {
          this.data = [];
          this.dataObservable.next(this.data);
        }
      );
  }
}
