import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path: '', component:MainComponent, children: [
    {path : 'home', component: HomeComponent},
    {path : '**' , redirectTo : 'home'}
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
