export class Utilisateur {
    public utilisateur_id?: number;
    id_rh: string
    mot_de_passe: string
    nom: string;
    prenom: string;
    bureau: string;
    mail: string;
    telephone: string;
}

export class Logement {
    public logement_id?: number;
    photo: string;
    numero_rue: string;
    type_rue: string;
    nom_rue: string;
    complement_adresse: string;
    code_postal: string;
    ville: string;
    prix_nuit: string;
    description: string;
}