import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaNaoEncontradaComponent } from '../pagina-nao-encontrada/pagina-nao-encontrada.component';
import { PrimeiraPaginaComponentComponent } from '../primeira-pagina-component/primeira-pagina-component.component';
import { SegundaPaginaComponent } from '../segunda-pagina/segunda-pagina.component';

const routes: Routes = [
  { path: 'primeira-pagina', component: PrimeiraPaginaComponentComponent},
  { path: 'segunda-pagina', component: SegundaPaginaComponent},
  { path: '', redirectTo: "primeira-pagina", pathMatch: "full"},
  { path: '**', component:PaginaNaoEncontradaComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
