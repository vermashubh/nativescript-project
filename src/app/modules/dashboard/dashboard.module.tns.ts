import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NativeScriptUIListViewModule } from 'nativescript-ui-listview/angular';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import {HeaderComponent} from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component'
import { ApisService } from './../../services/apis.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DashboardComponent, HeaderComponent, FooterComponent],
  imports: [
    DashboardRoutingModule,
    NativeScriptCommonModule,
    NativeScriptUIListViewModule,
    FormsModule
  ],
  providers :[ApisService],
  
  schemas: [NO_ERRORS_SCHEMA]
})
export class DashboardModule { }
