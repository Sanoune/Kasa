import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import Accueil from "./pages/Accueil";
import Error404 from "./pages/Error404";
import Logement from "./pages/Logement";
import Propos from "./pages/Propos";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/logement/:id" element={<Logement />} />
          <Route path="/propos" element={<Propos />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
