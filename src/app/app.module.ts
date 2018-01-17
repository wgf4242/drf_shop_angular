import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {GoodsService} from './shared/goods.service';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { DropdownComponent } from './dropdown/dropdown.component';


const routeConfig = [
  {path: '', component: AppComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    DropdownComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routeConfig)
  ],
  providers: [GoodsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
