import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Logement } from '../../modeles';
import { MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-logements',
  templateUrl: './logements.component.html',
  styleUrls: ['./logements.component.css']
})
export class LogementsComponent implements OnInit {

  logements: Logement[];
  logementSearch: Logement = new Logement();

  
  displayedColumns = ['adresse', 'prix', 'afficher', 'supprimer'];
  dataList = new MatTableDataSource();

  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public apiService: ApiService
  ) {}

  ngOnInit() {
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
    console.log(this.logements);
    this.apiService.chercherLogement(
    this.logementSearch.ville,
    this.logementSearch.code_postal).subscribe(
      (data: Logement[]) => {
        this.dataList = new MatTableDataSource(data);
        this.dataList.sort = this.sort;
  });
  }

  findOneLogement(logement_id) {
    console.log(logement_id);
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

}
