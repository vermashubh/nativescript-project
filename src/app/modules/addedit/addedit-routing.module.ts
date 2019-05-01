import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './addedit.common';

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddeditRoutingModule { }
