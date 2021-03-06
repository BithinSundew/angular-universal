import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfocenterRoutingModule } from './infocenter-routing.module';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';

@NgModule({
  declarations: [ListComponent,DetailsComponent],
  imports: [
    CommonModule,
    FormsModule,
    InfocenterRoutingModule
  ]
})
export class InfocenterModule { }
