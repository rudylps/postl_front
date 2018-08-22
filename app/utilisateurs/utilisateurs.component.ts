import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Utilisateur } from '../../modeles';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.css']
})
export class UtilisateursComponent implements OnInit{

  utilisateurs = new Array<Utilisateur>();
  utilisateur = Utilisateur;
  
  displayedColumns = ['id', 'nom', 'prenom', 'afficher', 'supprimer'];
  dataList;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public apiService: ApiService
  ) {}

  ngOnInit() {
    console.log("utilz. ngOnInit");
    this.apiService.getAllUtilisateurs().subscribe(
      cases => {
        this.dataList = new MatTableDataSource(cases);
        this.dataList.sort = this.sort;
      }
    );
  }

  findOneUtilisateur(utilisateur_id) {
    console.log(utilisateur_id);
    this.apiService.findOneUtilisateur(utilisateur_id).subscribe(
      () => {
    this.router.navigate(['/utilisateur/', utilisateur_id]), {relativeTo: this.route}});
  }
  
  deleteUtilisateur(utilisateur_id) {
    console.log(utilisateur_id);
    this.apiService.deleteUtilisateur(utilisateur_id).subscribe(
      () => {
        this.ngOnInit();
      }
    );
  }

}
