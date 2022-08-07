import { Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "./components";
import "./app.scss";
import { Home, About, Blog, Contact, Noutfound } from "./Pages";

function App() {
  return (
    <div className="app">
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="noutfound" element={<Noutfound />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
