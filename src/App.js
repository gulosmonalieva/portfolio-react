import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import "./app.scss";
import Home from "./Pages/Home/Home";
import Skills from "./Pages/Skills/Skills";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Education from "./Pages/Education/Education";
import Contacts from "./Pages/Contacts/Contacts";
import Noutfound from "./Pages/Noutfound/Noutfound";

function App() {
  return (
    <div className="app">
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="skills" element={<Skills />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="education" element={<Education />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="noutfound" element={<Noutfound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
