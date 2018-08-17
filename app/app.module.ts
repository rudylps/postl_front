import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatListModule,
  MatCardModule,
  MatInputModule,
  MatFormFieldModule,
  MatProgressSpinnerModule,
  MatSlideToggleModule,
  MatRadioModule,
  MatSelectModule,
  MatSnackBarModule,
  MatDialogModule,
  MatMenuModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatTabsModule,
  MatDatepickerModule,
} from '@angular/material';

import { RoutingModule } from './routing/routing.module';
import { AppComponent } from './app.component';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ApiService } from './api.service';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { LogementsComponent } from './logements/logements.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { LogementComponent } from './logement/logement.component';
import { AjoutLogementComponent } from './ajout-logement/ajout-logement.component';

import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {GrowlModule} from 'primeng/growl';
import {ChartModule} from 'primeng/chart';
import {FieldsetModule} from 'primeng/fieldset';
import {PanelModule} from 'primeng/panel';
import {PasswordModule} from 'primeng/password';
import {SpinnerModule} from 'primeng/spinner';
import {ToggleButtonModule} from 'primeng/togglebutton';
import {AccordionModule} from 'primeng/accordion';

@NgModule({
  declarations: [
    AppComponent,
    UtilisateursComponent,
    AccueilComponent,
    AppComponent,
    AccueilComponent,
    HeaderComponent,
    BodyComponent,
    LogementsComponent,
    UtilisateurComponent,
    LogementComponent,
    AjoutLogementComponent,
  ],
  imports: [
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatSlideToggleModule,
    MatRadioModule,
    MatSelectModule,
    MatSnackBarModule,
    MatDialogModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTabsModule,
    MatDatepickerModule,
    
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RoutingModule,
    FormsModule,
    ReactiveFormsModule,

    ButtonModule,
    CardModule,
    InputTextModule,
    GrowlModule,
    ChartModule,
    FieldsetModule,
    PanelModule,
    PasswordModule,
    SpinnerModule,
    ToggleButtonModule,
    AccordionModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
