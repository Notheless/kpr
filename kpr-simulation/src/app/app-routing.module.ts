import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportsComponent } from './components/reports/reports.component';
import { ReportsDetailComponent } from './components/reports-detail/reports-detail.component';
import { SimulationFormsComponent } from './components/simulation-forms/simulation-forms.component'
import { SimulationResultComponent } from './components/simulation-result/simulation-result.component'


const routes: Routes = [
  {path: '', redirectTo: '/simulation', pathMatch: 'full'},
  {path: 'simulation', component: SimulationFormsComponent},
  {path: 'reports', component: ReportsComponent},
  {path: 'reports/detail', component: ReportsDetailComponent},
  // {path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
