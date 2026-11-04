import "./StudentCard.css";
function StudentCard(props) {
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
        <p><strong>Email :</strong> {props.email}</p>
        <p><strong>Téléphone :</strong> {props.telephone}</p>
        <p><strong>Filière :</strong> {props.filiere}</p>
        <p><strong>Année d'étude :</strong> {props.anneeEtude}</p>
        <p><strong>Groupe :</strong> {props.groupe}</p>
        <p><strong>Ville :</strong> {villeEtudiant}</p>
      </div>

      <div className="card-footer">
        <button onClick={handleContact} className="btn-contact">
          Contacter
        </button>
      </div>
    </div>
  );
}

export default StudentCard;