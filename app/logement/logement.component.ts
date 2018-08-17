import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import {  Logement } from '../../modeles';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-logement',
  templateUrl: './logement.component.html',
  styleUrls: ['./logement.component.css']
})
export class LogementComponent implements OnInit {

  logement_id: number;
  logement = new Logement();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public apiService: ApiService
  ) { }

  ngOnInit() {
    console.log("lgmt ngOnInit");
    this.logement_id = + this.route.snapshot.paramMap.get('logement_id');
      this.apiService
      .findOneLogement(this.logement_id)
      .subscribe(
        logement => (this.logement = logement),
      );  
    console.log("lgmt ngOnInit");
  }

  deleteLogement() {
    console.log("lgmt deleteLogement");
    this.apiService.deleteLogement(
      this.logement.logement_id
    ).subscribe(
      () => this.router.navigate(['/logements'])
    );
    console.log("lgmt deleteLogement");
  }

  updateLogement(logement: Logement) {
    console.log("lgmt updateLogement");
    this.apiService.updateLogement(logement, this.logement_id)
    .subscribe(
      () => this.router.navigate(['/logements'])
    );
    console.log("lgmt updateLogement");
  }

}
