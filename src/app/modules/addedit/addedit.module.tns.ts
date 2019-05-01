import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AddeditRoutingModule } from './addedit-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { AddeditComponent } from './Components/addedit/addedit.component';

@NgModule({
  declarations: [AddeditComponent],
  imports: [
    AddeditRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AddeditModule { }
