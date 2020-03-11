import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SaleComponent } from './sale/sale.component';
import { NewProdComponent } from './new-prod/new-prod.component';

const routes: Routes = [
  { path: '', redirectTo: '/sale', pathMatch: 'full' },
  { path: 'sale', component: SaleComponent },
  { path: 'newProd', component: NewProdComponent },
  { path: '**', redirectTo: '/sale', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
