import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { UpdateComponent } from './update/update.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"list", component:ListComponent},
  {path:"update", component:UpdateComponent},
  {path:"update/:id", component:UpdateComponent},
  {path:"", component:ListComponent},
  {path:"**", component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
