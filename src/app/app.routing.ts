import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemberListComponent } from './member-list/member-list.component';
import { InnkeeperComponent } from './innkeeper/innkeeper.component';
import { AboutComponent } from './about/about.component';
import { DetailComponent } from './detail/detail.component';


const appRoutes: Routes = [
  {
    path: '',
    component: MemberListComponent
  },
  {
    path: 'innkeeper',
    component: InnkeeperComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'detail/:key',
    component: DetailComponent
  }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
