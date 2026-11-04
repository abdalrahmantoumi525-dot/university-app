import "./App.css";
function App() {
  const student = {
    nom: "Abdalrahman",
    prenom: "Toumi",
    email: "abdalrahmantoumi@gmail.com",
    telephone: "+216 99 999 999",
    filiere: "Génie Logiciel et Systèmes d'Information",
    annee: "2ème année",
    groupe: "GLSI 2",
    ville: "Mahdia",
    photo: "/images (7).jpg"
  };

  const handleContact = () => {
    window.location.href = `mailto:${student.email}?subject=Contact%20depuis%20l'application%20React`;
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <img src={student.photo} alt={student.nom} style={{ borderRadius: "60%",width: "150px",height: "150px",objectFit: "cover",marginBottom: "30px"}}/>
          <h1>Fiche étudiant</h1>
        </div>

        <div className="card-body">
          <p><strong>Nom :</strong> {student.nom}</p>
          <p><strong>Prénom :</strong> {student.prenom}</p>
          <p><strong>Email :</strong> {student.email}</p>
          <p><strong>Téléphone :</strong> {student.telephone}</p>
          <p><strong>Filiere :</strong> {student.filiere}</p>
          <p><strong>Année d'étude :</strong> {student.annee}</p>
          <p><strong>Groupe :</strong> {student.groupe}</p>
          <p><strong>Ville :</strong> {student.ville}</p>
        </div>

        <div className="card-footer">
          <button onClick={handleContact} className="btn-contact">
            Contacter
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;