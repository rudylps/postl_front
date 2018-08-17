import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  title = 'postl';
  
  constructor() { }

  ngOnInit() {
    console.log("accueil ngOnInit");
    
  }

  // ajout
  /* connect() {
    if ( this.password === '123456' &&  this.identifiant === 'PKDB643') {
      this.messageService.add({severity: 'success',
      summary: 'Identification réussie',
      detail: 'Connecté en tant que Rudy PELLARD'});
      this.router.navigate(['/utilisateurs']);
    } else {
      this.messageService.add({severity: 'error',
      summary: 'Echec d identification',
      detail: 'Veuillez saisir des données valides'});
      this.identifiant = '';
      this.password = '';
    }
  }

  clear() {
    this.identifiant = '';
    this.password = '';
  } */

}
