import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'infocenter',
    pathMatch: 'full',
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: "infocenter",
        loadChildren: () =>
          import("./views/infocenter/infocenter.module").then(
            (m) => m.InfocenterModule
          ),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
