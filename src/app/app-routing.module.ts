import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchBoxComponent } from './components/search-box/search-box.component';

const routes: Routes = [
  { path: '', component: SearchBoxComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
