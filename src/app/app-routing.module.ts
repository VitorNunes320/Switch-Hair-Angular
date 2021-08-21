import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './modules/about/about.component';
import { ProductsComponent } from './modules/products/products.component';
import { ScheduleComponent } from './modules/schedule/schedule.component';
import { UnityComponent } from './modules/unity/unity.component';

const routes: Routes = [
  {path: '', redirectTo: 'about', pathMatch: 'full'},
  {path: 'about', component: AboutComponent},  
  {path: 'products', component: ProductsComponent},  
  {path: 'units', component: UnityComponent},  
  {path: 'schedule', component: ScheduleComponent},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
