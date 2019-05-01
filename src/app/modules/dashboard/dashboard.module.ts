import { NgModule } from '@angular/core';
import { ApisService } from './../../services/apis.service';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HeaderComponent } from './Components/header/header.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DashboardComponent, FooterComponent,HeaderComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    DashboardRoutingModule
  ],
  providers :[ApisService]
})
export class DashboardModule { }
