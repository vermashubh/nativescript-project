import { ApisService } from './../../services/apis.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './Components/login/login.component';
import { LocalStorageService } from '~/app/services/local-storage.service';

@NgModule({
  declarations: [ LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers : [ApisService,LocalStorageService]
})
export class LoginModule { }
