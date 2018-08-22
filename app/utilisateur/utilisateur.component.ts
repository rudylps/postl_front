import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Utilisateur } from '../../modeles';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {

  utilisateur_id: number;
  utilisateur = new Utilisateur();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public apiService: ApiService
  ) { }
  
  ngOnInit() {
    console.log(this.utilisateur_id);
    this.utilisateur_id = + this.route.snapshot.paramMap.get('utilisateur_id');
      this.apiService
      .findOneUtilisateur(this.utilisateur_id)
      .subscribe(
        utilisateur => (this.utilisateur = utilisateur),
      );
  }

  deleteUtilisateur() {
    console.log(this.utilisateur);
      this.apiService.deleteUtilisateur(
      this.utilisateur.utilisateur_id
    ).subscribe(
      () => this.router.navigate(['/utilisateurs'])
    );
  }

  updateUtilisateur() {
    console.log(this.utilisateur_id);
    this.apiService.updateUtilisateur(this.utilisateur, this.utilisateur_id)
    .subscribe(
      () => this.router.navigate(['/utilisateurs'])
    );
  }

}
