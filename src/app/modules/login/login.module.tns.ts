import { ApisService } from './../../services/apis.service';
import { LoginRoutingModule } from './login-routing.module';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { FormGroup, FormBuilder,FormControl, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';

import { LoginComponent } from './Components/login/login.component';
@NgModule({
  declarations: [LoginComponent],
  imports: [
    LoginRoutingModule,
    //NativeScriptHttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NativeScriptFormsModule,
    HttpModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers:[ApisService]
})
export class LoginModule { }
