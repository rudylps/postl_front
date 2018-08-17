import { Component, OnInit } from '@angular/core';
import { Logement } from '../../modeles';
import { ApiService } from '../api.service';
import { Router, ActivatedRoute } from '../../../node_modules/@angular/router';
import { Form, NgForm } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-ajout-logement',
  templateUrl: './ajout-logement.component.html',
  styleUrls: ['./ajout-logement.component.css']
})
export class AjoutLogementComponent implements OnInit {

  logement: Logement = new Logement();
  editing: boolean;

  constructor(private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    console.log("ajoutlogement ngOnInit");
  }

  onsubmit(form: NgForm) {
    console.log("ajoutlogement onsubmit");
    this.apiService.createLogement(this.logement).subscribe(
      () => this.router.navigate(['/logements/'])
    );
  }

}
