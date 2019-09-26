import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecretsComponent } from './components/secrets/secrets.component';
import { SecretComponent } from './components/secret/secret.component';


const routes: Routes = [
  { path: 'secret/:id', component: SecretComponent },
  { path: '', component: SecretsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
