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
    return this.http.post<Utilisateur>(this.url+'utilisateur', utilisateur);
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
    console.log("apiService updateUtilisateur");
    return this.http.put<Utilisateur>(this.url + 'utilisateur/'+ utilisateur_id, utilisateur);
  }

  // -----------------API LOGEMENT-----------------------------------------------------
  // Création d'un nouvel logement
  createLogement(logement: Logement):Observable<Logement> {
    console.log("apiService createLogement");
    return this.http.post<Logement>(this.url+'logement',logement);
  }
  // Retourne la liste des logements
  getAllLogements():Observable<Logement[]> {
    console.log("apiService getAllLogements");
    return this.http.get<Logement[]>(this.url+'logements') as Observable<Logement[]>;
  }
  //Afficher le détail dun logement selon son Id
  findOneLogement(logement_id: number):Observable<Logement> {
    console.log("apiService findOneLogement");
    return this.http.get<Logement>(this.url+'logement/' + logement_id);
  }
  //Supprime un logement en fonction de son Id
  deleteLogement(logement_id: number): Observable<Logement> {
    console.log("apiService deleteLogement");
    return this.http.delete<Logement>(this.url + 'logement/'+ logement_id);
  }
  //Modifie un logement en fonction de son Id
  updateLogement(logement: Logement, logement_id: number): Observable<Logement> {
    console.log("apiService updateLogement");
    return this.http.put<Logement>(this.url + 'logement/'+ logement_id, logement);
  }

  // -----------------API REQUETES-----------------------------------------------------
  // Chercher un logement en fonction de la ville et du code postal
  chercherLogement(ville: String, cp: String): Observable<Logement[]> {
    console.log("apiService chercherLogement");
    return this.http.get<Logement[]>(this.url + 'chercher?&ville=' + ville +
                                                '&cp=' + cp );
  }
  
}
