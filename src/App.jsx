import "./App.css";
import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import StudentCard from "./components/StudentCard.jsx";

export default function App() {
  const students = [
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
  ];

  return (
    <div className="app-container">
      <Header />
      <Navbar />
      
      <main className="main-content">
        <div className="cards-grid">
          {students.map((student) => (
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
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}