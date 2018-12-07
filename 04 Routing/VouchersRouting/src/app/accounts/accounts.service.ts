import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { BalanceAccount } from "app/shared";
import { environment } from "environments/environment";

@Injectable({
  providedIn: "root"
})
export class AccountsService {
  constructor(private http: HttpClient) {}

  getAccounts(): Observable<BalanceAccount[]> {
    return this.http.get<BalanceAccount[]>(environment.accountsAPI);
  }
}
