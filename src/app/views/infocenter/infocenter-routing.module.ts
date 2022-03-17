import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  },
  {
    path: 'list',
    component: ListComponent,
    data: {
      title: 'Infocenters | Docplexus Curiosity',
      breadcrumb: [
        {
          label: 'Dashboard',
          url: ''
        },
        {
          label: 'Infocenter',
          url: ''
        }
      ]
    },
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    data: {
      title: 'Edit | Docplexus Curiosity',
      breadcrumb: [
        {
          label: 'Dashboard',
          url: 'login'
        },
        {
          label: 'Infocenter',
          url: 'infocenter'
        },
        {
          label: 'Edit',
          url: ''
        }
      ]
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfocenterRoutingModule { }
