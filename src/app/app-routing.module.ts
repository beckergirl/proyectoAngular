import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { PerfilComponent } from './pages/perfil/perfil.component';




const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: "registro", component: RegistroComponent},
  { path: "perfil", component: RegistroComponent},

  {path: "", pathMatch: "full", redirectTo: "home"}, // que la página de inicio sea HOME

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
