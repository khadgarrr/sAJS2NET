import { registerLocaleData } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import localeDe from "@angular/common/locales/de";
import { LOCALE_ID, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

import { RouteGuard } from "app/route.guard.service";
import { NavbarComponent } from "app/shared";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routing.module";
import { ChildRoutesComponent } from "./demos/child-routes/child-routes.component";
import { DemosComponent } from "./demos/demos.component";
import { PersonsComponent } from "./demos/persons/persons.component";
import { RouteGardsComponent } from "./demos/route-gards/route-gards.component";
import { RoutingBasicsComponent } from "./demos/routing-basics/routing-basics.component";
import { SecondaryRoutesComponent } from "./demos/secondary-routes/secondary-routes.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { EditorComponent } from "./shared/editor/editor.component";
import { MatchHeightDirective } from "./shared/match-height/match-height.directive";
import { SidePanelComponent } from "./shared/side-panel/side-panel.component";
import { UploaderComponent } from "./shared/uploader/uploader.component";
import { VouchersService } from "./vouchers/voucher.service";
import { VoucherDetailComponent } from "./vouchers/voucher/voucher-detail/voucher-detail.component";
import { VoucherDetailsListComponent } from "./vouchers/voucher/voucher-details-list/voucher-details-list.component";
import { VoucherResolver } from "./vouchers/voucher/voucher-resolver.service";
import { VoucherComponent } from "./vouchers/voucher/voucher.component";
import { VouchersListComponent } from "./vouchers/vouchers-list.component";
import { AccountsListComponent } from "./accounts/accounts-list/accounts-list.component";
import { AccountEditComponent } from "./accounts/account-edit/account-edit.component";
import { AccountsComponent } from "./accounts/accounts.component";

registerLocaleData(localeDe);

@NgModule({
  declarations: [
    AppComponent,
    DemosComponent,
    VouchersListComponent,
    VoucherComponent,
    VoucherDetailComponent,
    VoucherDetailsListComponent,
    PageNotFoundComponent,
    RoutingBasicsComponent,
    ChildRoutesComponent,
    RouteGardsComponent,
    PersonsComponent,
    NavbarComponent,
    MatchHeightDirective,
    SecondaryRoutesComponent,
    SidePanelComponent,
    EditorComponent,
    UploaderComponent,
    AccountsComponent,
    AccountsListComponent,
    AccountEditComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: "de-DE" },
    VouchersService,
    RouteGuard,
    VoucherResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
