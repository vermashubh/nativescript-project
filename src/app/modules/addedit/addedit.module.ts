import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddeditRoutingModule } from './addedit-routing.module';
import { AddeditComponent } from './Components/addedit/addedit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AddeditComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    AddeditRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AddeditModule { }
