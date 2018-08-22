import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Utilisateur, Logement } from '../modeles';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  private url="http://localhost:8080/"; // creation de la variable url

  constructor(private http: HttpClient) { }

  // -----------------API UTILISATEUR-----------------------------------------------------
  // Création d'un nouvel utilisateur
  createUtilisateur(utilisateur: Utilisateur):Observable<Utilisateur> {
    console.log("apiService createUtilisateur");
    return this.http.post<Utilisateur>(this.url+'createUtilisateur', utilisateur);
  }
  //Retourne la liste des utilisateurs
  getAllUtilisateurs():Observable<Utilisateur[]> {
    console.log("apiService getAllUtilisateurs");
    return this.http.get<Utilisateur[]>(this.url+'utilisateurs') as Observable<Utilisateur[]>;
  }
  //Afficher le détail d'un utilisateur selon son Id
  findOneUtilisateur(utilisateur_id: number): Observable<Utilisateur> {
    console.log("apiService findOneUtilisateur");
    return this.http.get<Utilisateur>(this.url + 'utilisateur/' + utilisateur_id);
  }
  //Supprime un utilisateur en fonction de son Id
  deleteUtilisateur(utilisateur_id: number): Observable<Utilisateur> {
    console.log("apiService deleteUtilisateur");
    return this.http.delete<Utilisateur>(this.url + 'utilisateur/'+ utilisateur_id);
  }
  //Modifie un utilisateur en fonction de son Id
  updateUtilisateur(utilisateur: Utilisateur, utilisateur_id: number): Observable<Utilisateur> {
    console.log(utilisateur_id);
    return this.http.put<Utilisateur>(this.url + 'utilisateur/'+ utilisateur_id, utilisateur);
  }

  // -----------------API LOGEMENT-----------------------------------------------------
  // Création d'un nouvel logement
  createLogement(logement: Logement):Observable<Logement> {
    console.log(logement);
    return this.http.post<Logement>(this.url+'createLogement',logement);
  }
  // Retourne la liste des logements
  getAllLogements():Observable<Logement[]> {
    console.log("apiService getAllLogements");
    return this.http.get<Logement[]>(this.url+'logements') as Observable<Logement[]>;
  }
  //Afficher le détail dun logement selon son Id
  findOneLogement(logement_id: number):Observable<Logement> {
    console.log(logement_id);
    return this.http.get<Logement>(this.url+'logement/' + logement_id);
  }
  //Supprime un logement en fonction de son Id
  deleteLogement(logement_id: number): Observable<Logement> {
    console.log(logement_id);
    return this.http.delete<Logement>(this.url + 'logement/'+ logement_id);
  }
  //Modifie un logement en fonction de son Id
  updateLogement(logement: Logement, logement_id: number): Observable<Logement> {
    console.log(logement_id);
    return this.http.put<Logement>(this.url + 'logement/'+ logement_id, logement);
  }

  // -----------------API REQUETES-----------------------------------------------------
  // Chercher un logement en fonction de la ville et du code postal
  chercherLogement(ville: String, cp: String): Observable<Logement[]> {
    console.log(this.url);
    return this.http.get<Logement[]>(this.url + 'chercherLogement?&ville=' + ville +
                                                '&cp=' + cp );
  }
  
}
