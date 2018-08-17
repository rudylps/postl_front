import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AccueilComponent } from '../accueil/accueil.component';
import { UtilisateursComponent } from '../utilisateurs/utilisateurs.component';
import { LogementsComponent } from '../logements/logements.component';
import { UtilisateurComponent } from '../utilisateur/utilisateur.component';
import { LogementComponent } from '../logement/logement.component';
import { AjoutLogementComponent } from '../ajout-logement/ajout-logement.component';

const ROUTES: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/login'},
  {path: 'login', component: AccueilComponent},
  {path: 'utilisateurs', component: UtilisateursComponent},
  {path: 'logements', component: LogementsComponent},
  // {path: 'utilisateur/utilisateur_id', component: UtilisateurComponent},
  {path: 'utilisateur', component: UtilisateurComponent},
  // {path: 'logement/logement_id', component: LogementComponent},
  {path: 'logement', component: LogementComponent},
  {path: 'ajout-logement', component: AjoutLogementComponent}

]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES)
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
