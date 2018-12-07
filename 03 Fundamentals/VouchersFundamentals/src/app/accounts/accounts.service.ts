import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Accounts } from "./accounts.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AccountsService {
  constructor(private http: HttpClient) {}

  public loadData(): Observable<Accounts[]> {
    return this.http.get<Accounts[]>("/assets/accounts.json");
  }
}
