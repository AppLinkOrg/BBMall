import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'test', loadChildren: './test/test.module#TestPageModule' },
  { path: 'story', loadChildren: './story/story.module#StoryPageModule' },
  { path: 'goodscategory', loadChildren: './goodscategory/goodscategory.module#GoodscategoryPageModule' },
  { path: 'goods', loadChildren: './goods/goods.module#GoodsPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
