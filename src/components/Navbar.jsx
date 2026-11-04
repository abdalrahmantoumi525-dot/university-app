import "./Navbar.css";

function Navbar() {
  return (
    <nav className="app-navbar">
      <a href="#accueil">Accueil</a>
      <a href="#etudiants">Liste des Étudiants</a>
      <a href="#contact">Contact</a>
    </nav>
  );
}

export default Navbar;