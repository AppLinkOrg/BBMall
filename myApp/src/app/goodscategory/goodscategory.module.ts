import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GoodscategoryPage } from './goodscategory.page';

const routes: Routes = [
  {
    path: '',
    component: GoodscategoryPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GoodscategoryPage]
})
export class GoodscategoryPageModule {}
