import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Logement } from '../../modeles';
import { MatPaginator, MatSort, MatTableDataSource, MatIconModule } from '@angular/material';
// import { Observable } from 'rxjs';

@Component({
  selector: 'app-logements',
  templateUrl: './logements.component.html',
  styleUrls: ['./logements.component.css']
})
export class LogementsComponent implements OnInit {

  /* logements: Logement[];
  logement: Logement;
  logementSearch: Logement = new Logement(); */

  logements = new Array<Logement>();
  logementSearch: Logement = new Logement();
  
  displayedColumns = ['logement_id', 'adresse', 'prix', 'afficher', 'supprimer'];
  dataList;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public apiService: ApiService
  ) {}

  ngOnInit() {
    console.log("ngOnInit");
    this.apiService.getAllLogements().subscribe(
      cases => {
        this.dataList = new MatTableDataSource(cases);
        this.dataList.sort = this.sort;
        this.logementSearch.ville = '';
        this.logementSearch.code_postal = '';
      }
    );
  }

  onSearch() {
    console.log("lgmts onSearch");
    this.apiService.chercherLogement(
    this.logementSearch.ville,
    this.logementSearch.code_postal).subscribe(
      (data: Logement[]) => {
    this.logements = data;
  });
  }

  /* findOneLogement(logement_id) {
    console.log("lgmts findOneLogement");
    this.router.navigate(['/logement/' + logement_id]), {relativeTo: this.route};
  } */
  findOneLogement(logement_id) {
    console.log("lgmts. findOneLogement");
    this.apiService.findOneLogement(logement_id).subscribe(
      () => {
    this.router.navigate(['/logement/', logement_id]), {relativeTo: this.route}});
  }
  
  deleteLogement(logements_id) {
    console.log("lgmts deleteLogement");
    this.apiService.deleteLogement(logements_id).subscribe(
      () => {
        this.ngOnInit();
      }
    );
  }
  
  afficherDetail(logement_id) {
	  this.router.navigate(['/logements', logement_id]), {relativeTo: this.route};
	  console.log("lgmtz. afficherDetail");
  }

  /* chercherLogement(ville: String, cp: String): Observable<Logement[]> {
    this.apiService.chercherLogement<Logement[]>(this.url + 'chercherLogement?&ville=' + ville +
                                                '&cp=' + cp );
  } */

}
