import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {GoodService} from './shared/goods.service';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main/main.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {FooterComponent} from './footer/footer.component';
import {GoodComponent} from './good/good.component';
import {GoodDetailComponent} from './good-detail/good-detail.component';
import {PriceRangeComponent} from './price-range/price-range.component';


const routeConfig: Routes = [
  {path: '', component: MainComponent},
  // {path: 'home', component: MainComponent},
  {path: 'mygoods', component: MainComponent},
  {path: 'mygoods/:id', component: GoodComponent},
  // {path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    MainComponent,
    SidebarComponent,
    FooterComponent,
    GoodComponent,
    GoodDetailComponent,
    PriceRangeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routeConfig)
  ],
  providers: [GoodService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
