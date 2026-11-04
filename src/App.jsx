import { useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import StudentCard from "./components/StudentCard.jsx";
export default function App() {
  const [students, setStudents] = useState([
    {
      prenom: "Abdalrahman",
      nom: "Toumi",
      email: "abdalrahmantoumi@gmail.com",
      telephone: "+216 99 999 999",
      filiere: "Génie Logiciel et Systèmes d'Information",
      anneeEtude: "2ème année",
      groupe: "GLSI 2",
      ville: "Mahdia",
      photo: "/images (7).jpg",
    },
    {
      prenom: "Sarra",
      nom: "Trabelsi",
      email: "sarra.trabelsi@gmail.com",
      telephone: "+216 22 345 678",
      filiere: "Génie Logiciel et Systèmes d'Information",
      anneeEtude: "2ème année",
      groupe: "GLSI 1",
      ville: "Sousse",
      photo: "/download.jpg",
    },
    {
      prenom: "Mariem",
      nom: "Khalfallah",
      email: "mariem.khalfallah@gmail.com",
      telephone: "+216 27 567 890",
      filiere: "Génie Logiciel et Systèmes d'Information",
      anneeEtude: "2ème année",
      groupe: "GLSI 2",
      ville: "Mahdia",
      photo: "/images (8).jpg",
    },
  ]);

  
  const [recherche, setRecherche] = useState("");

  
  function ajouterEtudiant() {
    const nouvelEtudiant = {
      prenom: "Yassine",
      nom: "Ben Salem",
      email: "yassine.bensalem@gmail.com",
      telephone: "+216 44 444 444",
      filiere: "Génie Logiciel et Systèmes d'Information",
      anneeEtude: "2ème année",
      groupe: "GLSI 1",
      ville: "Kairouan",
      photo: "/download.jpg",
    };
    setStudents([...students, nouvelEtudiant]);
  }

  function supprimerEtudiant(emailSupp) {
    setStudents(students.filter((student) => student.email !== emailSupp));
  }

  function modifierEtudiant(emailModif) {
    const nouveauPrenom = prompt("Entrez le nouveau prénom de l'étudiant :");
    if (nouveauPrenom && nouveauPrenom.trim() !== "") {
      setStudents(
        students.map((student) => {
          if (student.email === emailModif) {
            return { ...student, prenom: nouveauPrenom.trim() };
          }
          return student;
        })
      );
    }
  }

  // Filtrage des étudiants par nom, prénom ou filière (TP3)
  const studentsFiltres = students.filter((student) => {
    const terme = recherche.toLowerCase();
    return (
      student.prenom.toLowerCase().includes(terme) ||
      student.nom.toLowerCase().includes(terme) ||
      student.filiere.toLowerCase().includes(terme)
    );
  });

  return (
    <div className="app-container">
      <Header />
      <Navbar />
      
      <main className="main-content">
        <div className="actions-bar" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem", padding: "0 1rem", flexWrap: "wrap", gap: "1rem" }}>
          <button onClick={ajouterEtudiant} className="btn-primary" style={{ backgroundColor: "#2ecc71", color: "white", border: "none", padding: "0.7rem 1.2rem", borderRadius: "8px", cursor: "pointer", fontWeight: "600" }}>
            + Ajouter un étudiant
          </button>

          <input
            type="text"
            placeholder="Rechercher (nom, prénom, filière)..."
            value={recherche}
            onChange={(e) => setRecherche(e.target.value)}
            style={{ padding: "0.7rem", borderRadius: "8px", border: "1px solid #ccc", width: "300px" }}
          />
        </div>

       
        <div className="cards-grid">
          {studentsFiltres.map((student) => (
            <StudentCard
              key={student.email}
              prenom={student.prenom}
              nom={student.nom}
              email={student.email}
              telephone={student.telephone}
              filiere={student.filiere}
              anneeEtude={student.anneeEtude}
              groupe={student.groupe}
              ville={student.ville}
              photo={student.photo}
              onSupprimer={supprimerEtudiant}
              onModifier={modifierEtudiant}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}