import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RutFormComponent } from './rut-form/rut-form.component';
import { RutInfoComponent } from './rut-info/rut-info.component';

const routes: Routes = [
{path: "", component: RutFormComponent},
{path: "?rut=", component: RutInfoComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
