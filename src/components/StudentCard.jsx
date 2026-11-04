import { useState } from "react";
import "./StudentCard.css";

export default function StudentCard(props) {
  const [coordonneesVisibles, setCoordonneesVisibles] = useState(false);

  function basculerCoordonnees() {
    setCoordonneesVisibles(!coordonneesVisibles);
  }

  const villeEtudiant = props.ville || "Non renseignée";

  const handleContact = () => {
    window.location.href = `mailto:${props.email}?subject=Contact%20depuis%20l'application`;
  };

  return (
    <div className="card">
      <div className="card-header">
        <img 
          src={props.photo} 
          alt={`Photo de ${props.prenom} ${props.nom}`} 
          className="student-photo" 
        />
        <h2>Fiche étudiant</h2>
      </div>

      <div className="card-body">
        <p><strong>Nom & Prénom :</strong> {props.prenom} {props.nom}</p>
        <p><strong>Filière :</strong> {props.filiere}</p>
        <p><strong>Année d'étude :</strong> {props.anneeEtude}</p>
        <p><strong>Groupe :</strong> {props.groupe}</p>
        <p><strong>Ville :</strong> {villeEtudiant}</p>

        {/* 2. Affichage conditionnel des coordonnées avec && */}
        {coordonneesVisibles && (
          <div className="coordonnees-supplementaires" style={{ marginTop: "10px", padding: "8px", background: "#f1f3f5", borderRadius: "6px" }}>
            <p><strong>Email :</strong> {props.email}</p>
            <p><strong>Téléphone :</strong> {props.telephone}</p>
          </div>
        )}
      </div>

      <div className="card-footer" style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <button onClick={basculerCoordonnees} className="btn-toggle" style={{ background: "#34495e", color: "white", border: "none", padding: "0.5rem", borderRadius: "6px", cursor: "pointer" }}>
          {coordonneesVisibles ? "Masquer les coordonnées" : "Afficher les coordonnées"}
        </button>

        <button onClick={handleContact} className="btn-contact">
          Contacter
        </button>

        <div style={{ display: "flex", gap: "8px" }}>
          <button onClick={() => props.onModifier(props.email)} className="btn-mod"
            style={{ backgroundColor: "#f39c12", color: "white", border: "none", padding: "6px", borderRadius: "6px", cursor: "pointer", flex: 1 }}
          >
            Modifier
          </button>
          <button 
            onClick={() => props.onSupprimer(props.email)} className="btn-del"
            style={{ backgroundColor: "#e74c3c", color: "white", border: "none", padding: "6px", borderRadius: "6px", cursor: "pointer", flex: 1 }}
          >
            Supprimer
          </button>
        </div>
      </div>
    </div>
  );
}