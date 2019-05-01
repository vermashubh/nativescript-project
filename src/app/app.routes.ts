import { Routes } from '@angular/router';



export const routes: Routes = [


  {
    path: '',
    loadChildren : './modules/login/login.module#LoginModule'
  }, {
    path : 'dashboard',
    loadChildren :'./modules/dashboard/dashboard.module#DashboardModule'
  },
  {
    path : 'addedit',
    loadChildren :'./modules/addedit/addedit.module#AddeditModule'
  }
  
];
